"""Render English-language copies of the two portfolio slide decks.

The source PDFs are read only. UI screenshots and artwork remain as evidence of
the original Japanese apps; editable slide text is translated into English.

Usage: python scripts/prepare-english-slide-assets.py HAYO_PDF ATTENDANCE_PDF
"""

from pathlib import Path
import re
import sys

import pymupdf


HAYO = {
    "待ち合わせで、": "When meeting up,",
    "「今どこ？」": '"Where are you?"',
    "と送ったこと、": "have you ever texted",
    "ありますか？": "your friends?",
    "LEE　松岡　平野　山内": "LEE  MATSUOKA  HIRANO  YAMAUCHI",
    "会う前から、ちょっと疲れる。": "Meeting up should not be exhausting.",
    "待ち合わせの問題は、遅刻だけじゃない。": "Being late is only part of the problem.",
    "確認": "CHECK-INS",
    "「今どこ？」が": '"Where are you?"',
    "何度も飛ぶ": "again and again",
    "退屈": "BOREDOM",
    "移動時間が": "Travel time",
    "ただの空白になる": "feels wasted",
    "不安": "UNCERTAINTY",
    "ちゃんと": "Are they",
    "向かっているのか": "actually on the way?",
    "集合するときだけ使う、": "Only for the meetup:",
    "使い捨ての": "temporary",
    "位置共有アプリ": "location sharing",
    "登録なし　｜　出発から到着まで　｜　集合後に消える": "No sign-up  |  From departure to arrival  |  Disappears after meeting",
    "出発した瞬間、待ち合わせがゲームになる。": "The meetup becomes a game as soon as you leave.",
    "自撮り　→　はよ　→　フォトミッション　→　到着ランキング": "Selfie  /  Hayo nudge  /  Photo mission  /  Arrival ranking",
    "別々の道でも、同じ体験になる。": "Different routes, one shared experience.",
    "使用技術": "Technology",
    "匿名認証": "Anonymous sign-in",
    "アカウント登録なし": "No account needed",
    "位置更新を抑制": "Fewer location updates",
    "最短15秒 ＋ 10mフィルター": "15-second minimum + 10 m filter",
    "通知をシンプルに": "Simple notifications",
    "アプリ内 ＋ ローカル通知": "In-app + local notifications",
    "待ち合わせが、こんな体験に変わる。": "Here is what a meetup looks like with Hayo.",
    "グループ作成": "Create a group",
    "ホーム画面": "Home screen",
    "みんなで写真共有": "Share photos",
    "到着順ランキング": "Arrival ranking",
    "催促も、別々の道も、遊びに変える。": "Even the journey becomes part of the fun.",
    "「はよ」　＋　全員共通のフォトミッション": "Hayo nudges + a shared photo mission",
    "集合前から、一緒に遊んでいる感覚へ。": "The group experience starts before you meet.",
    "消えるから、飾らず撮れる": "Take candid photos that disappear",
    "集合10分後に、自動削除": "Automatically deleted 10 minutes after meeting",
    "その先は、リアルな会話へ": "Then continue the conversation in person",
    "会うまではhayo。会ったら、会話へ。": "Hayo until you meet. Then talk face to face.",
    "楽しい。": "Fun now.",
    "でも、残らない。": "Gone later.",
    "待ち合わせを": "Make meeting up",
    "エンタメに": "something fun.",
    "次の集合は、hayoで。": "Try Hayo for your next meetup.",
}

ATTENDANCE = {
    "塾の出席管理システム": "Tutoring Center Attendance System",
    "名古屋大学情報学部コンピュータ科学科": "Nagoya University | Computer Science",
    "松岡功樹": "Koki Matsuoka",
    "〜教育現場のDX化〜": "Digitizing tutoring-center operations",
    "プロジェクト概要": "Project Overview",
    "塾の出席管理をデジタル化した実践DX": "Digitizing attendance at a tutoring center",
    "設計と開発": "Design & Development",
    "現場の声を形にした設計と開発": "Built with teacher and student feedback",
    "運用と展望": "Operations & Next Steps",
    "現場を変えた経験を次の挑戦へ": "From daily use to the next iteration",
    "[ 目次 ]": "[ CONTENTS ]",
    "塾の出席管理をデジタル化した実践D X": "Digitizing tutoring-center attendance",
    "[ プロジェクト概要 ]": "[ PROJECT OVERVIEW ]",
    "個人塾　出席管理システム": "Tutoring Center Attendance System",
    "開発期間：2024年〜2025年": "Development: 2024-2025",
    "担当：企画／設計／開発／導入／改善 すべて": "Role: planned, designed, built, launched, and improved the system",
    "使用技術：Firebase Firestore / HTML / JavaScript / CSS": "Stack: Firebase Firestore / HTML / JavaScript / CSS",
    "運用規模：生徒60名以上、講師複数名が毎日運用中": "Usage: 60+ students and several teachers use it daily",
    "紙での出席管理を完全に廃止し、": "Replaced paper-based attendance tracking",
    "塾運営全体をデジタル化した実践的DXプロジェクト": "and digitized everyday tutoring-center operations",
    "[ 背景]": "[ BACKGROUND ]",
    "対象：": "Context:",
    "私のバイト先である。生徒60名超の個人塾": "A tutoring center where I worked, serving over 60 students",
    "現状：": "Before:",
    "出席管理を紙と手書きで行っている": "Attendance was managed on paper",
    "・生徒が翌月の希望を紙で提出": "Students submitted next month's availability on paper",
    "・先生がカレンダーに手書きで転記・調整・配布": "Teachers copied, adjusted, and distributed paper calendars",
    "課題：": "Problems:",
    "設計・記入に時間がかかる（転記ミス・手戻り）": "Manual entry took time and caused copying errors",
    "直前の追加やキャンセルはメール・口頭で煩雑": "Last-minute changes required email or verbal coordination",
    "満席の把握が難しく、無駄なやり取りが多い": "Capacity was hard to track, creating extra back-and-forth",
    "[ 目的 ]": "[ GOALS ]",
    "先生": "Teachers",
    "PCから一覧管理・編集・集計を一元化": "View, edit, and summarize schedules on a PC",
    "次の月の予定の自動生成": "Generate next month's schedule automatically",
    "生徒": "Students",
    "スマホから“すぐに”": "Quickly use a phone to",
    "出席確認・キャンセル": "check or cancel attendance",
    "[ ヒアリング ]": "[ USER INTERVIEWS ]",
    "紙での管理が課題であると感じ、先生に改善を提案しました。": "I proposed a digital alternative to paper-based tracking.",
    "何度も何度も話し合いを重ね、困っている点を整理し、": "Through repeated discussions with teachers, I identified pain points",
    "こちらからも具体的な案を出して先生と一緒に形にしました。": "and worked with them to turn concrete ideas into a usable system.",
    "さらに生徒にも試してもらい、意見を反映しながら、": "Students tested it too. I incorporated their feedback",
    "先生と生徒の両方が使いやすい形になるまで何度も改善を続けました。": "and kept improving the experience for both students and teachers.",
    "[ 機能 ]": "[ FEATURES ]",
    "ログイン機能": "Sign-in",
    "出席登録": "Attendance registration",
    "残席表示": "Available-seat display",
    "休講・特別講習の科目名": "Class cancellations and special-session labels",
    "翌月分の一括生成・コピー・全削除にも対応": "Bulk creation, copying, and clearing of next month's schedule",
    "CSV出力でExcel取り込み可能": "CSV export for Excel",
    "生徒追加・削除・改名": "Add, remove, and rename students",
    "月ごとの公開切替": "Monthly publication controls",
    "先生からのお知らせ": "Teacher announcements",
    "[ 技術環境 ]": "[ TECHNOLOGY ]",
    "フロントエンド：HTML / JavaScript / CSS（フレームワーク非依存で軽量構成）": "Frontend: HTML / JavaScript / CSS (lightweight, no framework)",
    "データベース：Firebase Firestore（リアルタイム更新対応）": "Database: Firebase Firestore (real-time updates)",
    "ホスティング：Firebase Hosting": "Hosting: Firebase Hosting",
    "UIは「スマホ操作を前提に最小ステップで登録完了」できるように設計": "The mobile-first UI lets students register attendance in a few steps",
    "直感的に操作できる画面設計を目指しました": "I designed the screens for straightforward, intuitive use",
    "[ 生徒側 ]": "[ STUDENT VIEW ]",
    "[ 先生側 ]": "[ TEACHER VIEW ]",
    "トップ画面": "Home screen",
    "出席確認・編集画面": "Attendance view / editor",
    "科目名編集画面": "Subject-name editor",
    "次月出席予定一括作成画面": "Create next month's schedule",
    "この他に生徒名編集、お知らせ編集、csv出力、休講日設定画面があります": "Also includes student-name and announcement editors, CSV export, and holiday settings",
    "[ 実際の運用 ]": "[ IN PRODUCTION ]",
    "2025年春から正式稼働。": "Launched in spring 2025.",
    "現在は60名以上の生徒と先生が毎日使用。": "Now used daily by 60+ students and teachers.",
    "紙での管理は完全に廃止され、先生の業務時間や": "Paper tracking ended, reducing teachers' admin work",
    "生徒の手間を大幅に削減できました。": "and making attendance easier for students.",
    "さらに、運用開始後もフィードバックをもとに": "I still use feedback after launch",
    "改善を繰り返しています": "to keep improving the system.",
    "[ 今後の展望 ]": "[ NEXT STEPS ]",
    "データベースを利用したデータ分析機能を追加中。": "Adding analytics based on the existing database.",
    "講師のシフト管理や他の個人塾・中小事業の予約管理への応用": "Exploring teacher shift planning and bookings for other small organizations.",
    "も検討中。": " ",
    "どんな現場でも導入できるよう、": "To make the system easier to reuse,",
    "再利用性と拡張性を高めた軽量システムとして発展させる予定です。": "I plan to improve its portability and extensibility.",
    "人と現場に寄り添いながら、課題を整理して仕組みで": "I want to keep understanding real users' problems",
    "解決する力を磨き続けたい。": "and solving them with practical software.",
    "将来的には、こうした経験をいかし、": "I hope to apply what I learned here",
    "再利用できる仕組みづくりと提案力で": "to build reusable systems and propose",
    "活躍したいと考えています。": "solutions that work in other settings.",
    "ありがとうございました": "Thank you",
}


def slide_lines(page):
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            yield line, "".join(span["text"] for span in line["spans"])


def limit_for(deck, page_number, x):
    if deck == "hayo":
        if page_number == 1 and x < 800:
            return 615
        if page_number in (3, 8) and x < 800:
            return 785
        if page_number == 9:
            return 1380
        if page_number == 2 and x >= 900:
            return 1350
        if page_number == 2 and x >= 500:
            return 885
        if page_number == 2 and x >= 100:
            return 480
        if page_number == 5 and 100 <= x < 500:
            return 530
        if page_number == 6 and x > 1000:
            return 1380
        if page_number == 6 and 700 < x <= 1000:
            return 1060
        if page_number == 6 and 400 < x <= 700:
            return 720
        if page_number == 6 and 100 < x <= 400:
            return 390
    return 1360


def render_deck(deck, translations, expected_pages, source):
    output = Path("public/slides") / f"{deck}-en"
    output.mkdir(parents=True, exist_ok=True)

    with pymupdf.open(source) as document:
        if len(document) != expected_pages:
            raise ValueError(f"{deck}: expected {expected_pages} pages, got {len(document)}")

        for page_number, page in enumerate(document, start=1):
            replacements = []
            for line, original in slide_lines(page):
                key = original.strip()
                if not re.search(r"[\u3040-\u30ff\u3400-\u9fff]", key):
                    continue
                if key not in translations:
                    raise ValueError(f"Untranslated {deck} page {page_number}: {key!r}")

                span = line["spans"][0]
                rect = pymupdf.Rect(line["bbox"])
                translated = translations[key].strip()
                is_header = deck == "attendance" and key.startswith("[") and rect.y0 < 200
                replacements.append((rect, translated, span, is_header))
                if is_header:
                    font = "hebo" if span["flags"] & 16 else "helv"
                    width = pymupdf.get_text_length(translated, fontname=font, fontsize=span["size"])
                    mask = pymupdf.Rect(720 - width / 2 - 18, rect.y0 - 5, 720 + width / 2 + 18, rect.y1 + 5)
                    page.add_redact_annot(mask, fill=(1, 1, 1))
                else:
                    page.add_redact_annot(rect, fill=False)

            page.apply_redactions(images=0, graphics=0, text=0)

            for rect, translated, span, is_header in replacements:
                if not translated:
                    continue
                font = "hebo" if span["flags"] & 16 else "helv"
                original_size = span["size"]
                right = limit_for(deck, page_number, rect.x0)
                is_centered = (
                    deck == "attendance"
                    and not (page_number == 2 and rect.y0 > 200)
                    and abs((rect.x0 + rect.x1) / 2 - 720) < 105
                    and rect.x0 > 250
                )
                if deck == "attendance" and page_number == 2 and rect.x0 > 400 and rect.y0 > 390:
                    right = 915
                max_width = 1280 if is_centered else max(70, right - rect.x0)
                size = min(original_size, 1.9 * rect.height)
                while pymupdf.get_text_length(translated, fontname=font, fontsize=size) > max_width and size > 15:
                    size -= 1
                color_int = span["color"]
                color = ((color_int >> 16 & 255) / 255, (color_int >> 8 & 255) / 255, (color_int & 255) / 255)
                baseline = rect.y0 + rect.height * 0.76
                width = pymupdf.get_text_length(translated, fontname=font, fontsize=size)
                left = 720 - width / 2 if is_centered or is_header else rect.x0
                page.insert_text((left, baseline), translated, fontname=font, fontsize=size, color=color)

            pixmap = page.get_pixmap(matrix=pymupdf.Matrix(1600 / 1440, 1600 / 1440), alpha=False)
            pixmap.save(output / f"{page_number:02}.jpg", jpg_quality=84)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: prepare-english-slide-assets.py HAYO_PDF ATTENDANCE_PDF")
    render_deck("hayo", HAYO, 9, Path(sys.argv[1]))
    render_deck("attendance", ATTENDANCE, 17, Path(sys.argv[2]))
