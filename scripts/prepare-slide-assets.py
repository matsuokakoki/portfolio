"""Render the two presentation PDFs as web slides without publishing the PDFs.

Usage: python scripts/prepare-slide-assets.py HAYO_PDF ATTENDANCE_PDF
"""

from pathlib import Path
import sys

import pymupdf


DECKS = (("hayo", 9), ("attendance", 17))


def render_deck(name: str, expected_pages: int, source: Path) -> None:
    output = Path("public/slides") / name
    output.mkdir(parents=True, exist_ok=True)

    with pymupdf.open(source) as document:
        if len(document) != expected_pages:
            raise ValueError(f"{name}: expected {expected_pages} pages, got {len(document)}")

        for index, page in enumerate(document):
            if abs(page.rect.width - 1440) > 1 or abs(page.rect.height - 810) > 1:
                raise ValueError(f"{name} page {index + 1}: unexpected slide size")

            pixmap = page.get_pixmap(matrix=pymupdf.Matrix(1600 / 1440, 1600 / 1440), alpha=False)
            pixmap.save(output / f"{index + 1:02}.jpg", jpg_quality=82)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: prepare-slide-assets.py HAYO_PDF ATTENDANCE_PDF")
    for deck, source in zip(DECKS, map(Path, sys.argv[1:]), strict=True):
        render_deck(*deck, source)
