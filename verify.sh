#!/bin/bash

LINT_CMD="bunx biome check ."
TEST_CMD="bun run test"

echo "=== Running Verification ==="

echo ""
echo "=== Lint Check ==="
eval "$LINT_CMD"
LINT_EXIT=$?

if [ $LINT_EXIT -ne 0 ]; then
    echo ""
    echo "❌ Lint check failed."
    exit 1
fi

echo ""
echo "=== Unit Tests ==="
eval "$TEST_CMD"
TEST_EXIT=$?

if [ $TEST_EXIT -ne 0 ]; then
    echo ""
    echo "❌ Unit tests failed."
    exit 1
fi

echo ""
echo "✅ All verification checks passed."
