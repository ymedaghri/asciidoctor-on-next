#!/bin/bash
FILE="*.adoc"

fswatch -o $FILE | while read f; do
  clear
  asciidoctor -r asciidoctor-diagram $FILE
  rsync -av --include='*/' --include='*.html' --include='*.png' --exclude='*' . ../public/dashboard/  
done