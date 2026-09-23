"""Render the two presentation PDFs as web slides without publishing the PDFs.

Usage: python scripts/prepare-slide-assets.py HAYO_PDF ATTENDANCE_PDF
Review the redaction rectangles whenever the source slides change.
"""

from pathlib import Path
import sys

import pymupdf


DECKS = (
    (
        "hayo",
        9,
        {
            # Slide 6 contains participants' faces, names, and locations in app screenshots.
            5: [
                (55, 185, 350, 765),
                (380, 185, 670, 765),
                (700, 185, 995, 765),
                (1020, 185, 1365, 765),
            ],
        },
    ),
    (
        "attendance",
        17,
        {
            # Slides 11-12 contain actual student names in app screenshots.
            10: [
                (175, 245, 380, 655),
                (435, 245, 650, 655),
                (710, 245, 925, 655),
                (985, 245, 1190, 655),
            ],
            11: [
                (160, 175, 355, 390),
                (390, 175, 815, 390),
                (820, 165, 1290, 390),
                (390, 445, 815, 635),
                (820, 445, 1290, 635),
            ],
        },
    ),
)


def render_deck(name: str, expected_pages: int, redactions: dict, source: Path) -> None:
    output = Path("public/slides") / name
    output.mkdir(parents=True, exist_ok=True)

    with pymupdf.open(source) as document:
        if len(document) != expected_pages:
            raise ValueError(f"{name}: expected {expected_pages} pages, got {len(document)}")

        for index, page in enumerate(document):
            if abs(page.rect.width - 1440) > 1 or abs(page.rect.height - 810) > 1:
                raise ValueError(f"{name} page {index + 1}: unexpected slide size")

            for bounds in redactions.get(index, []):
                page.add_redact_annot(
                    pymupdf.Rect(bounds),
                    text="Personal details hidden",
                    fontname="helv",
                    fontsize=11,
                    fill=(0.94, 0.95, 0.97),
                    text_color=(0.25, 0.29, 0.35),
                )
            if index in redactions:
                page.apply_redactions(images=2)

            pixmap = page.get_pixmap(matrix=pymupdf.Matrix(1600 / 1440, 1600 / 1440), alpha=False)
            pixmap.save(output / f"{index + 1:02}.jpg", jpg_quality=82)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: prepare-slide-assets.py HAYO_PDF ATTENDANCE_PDF")
    for deck, source in zip(DECKS, map(Path, sys.argv[1:]), strict=True):
        render_deck(*deck, source)
