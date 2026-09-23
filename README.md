# Koki Matsuoka — Portfolio

Software Engineer / ML Engineer を志望する松岡功樹の日本語・英語ポートフォリオです。経歴の概要から、公開コードと実験記録へ進めます。

**Status:** Public repositoryとして公開中。掲載内容は本人の経歴と、リンク先の公開成果物に基づきます。

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS.

**Verified deployment:** https://portfolio-88lo85s8l-koki-matsuoka-portfolio.vercel.app/ （2026-09-23にブラウザで表示確認。旧URLは404）

## Public projects

- [Career Form Autofill](https://github.com/matsuokakoki/career-form-autofill): 選択・確認して入力するChrome拡張。
- [Extreme Hanafuda](https://github.com/matsuokakoki/hanahuda): TypeScriptのゲームルールとFirebaseを用いた2人対戦ゲーム。
- [IFC/BIM LoRA experiment](https://github.com/matsuokakoki/ifc-bim-llm-finetuning): 学習・評価条件、失敗例、制約を公開した研究記録。
- [ECG SNN research prototype](https://github.com/matsuokakoki/ecg_snn_project): SNN/CNN比較の試作。現在の結果はFold 0の限定的なもので、評価プロトコルを整理中。

## Run locally

Node.js 24 と npm を使用します。

```bash
npm ci
npm run dev
```

http://localhost:3000 を開きます。静的な経歴・作品情報は `src/app/portfolio-data.ts`、ページ表示は `src/app/page.tsx` にあります。

## Quality checks

```bash
npm run lint
npm run build
```

2026-09-23にNode.js 22.22.0で `npm run lint` と `npm run build` を実行し、成功しました。`package.json` の想定はNode.js 24.xなので、想定環境での再確認が必要です。専用の自動テストはまだありません。

## Notes

- LoRA実験の回答部分のlossは別形式の評価900件、ROUGE/BLEUは生成50件で比較しています。指標と限界の詳細は[実験レポート](https://github.com/matsuokakoki/ifc-bim-llm-finetuning/blob/main/reports/experiment_log.md)を参照してください。
- 塾の出席管理システムは本番運用中のPrivate repoです。コードや利用者データは公開していません。
- 写真、氏名、連絡先、組織名・経歴は公開ページに表示されます。プロフィール写真の権利と組織に関する表現は本人による確認が必要です。
