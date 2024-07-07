#!/bin/bash

npx concurrently --kill-others-on-fail \
  "./compile_doctor.sh" \
  "npx browser-sync start --server --files '*.html, *.css, *.js, *.adoc'"
