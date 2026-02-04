.PHONY: dev lint lint-fix build preview types hooks install help

CHECK_NODE_WINDOWS = powershell -Command "if (-not (Get-Command node -ErrorAction SilentlyContinue)) { Write-Host 'Node.js is not installed!' ; exit 1 }"
CHECK_NODE_UNIX = command -v node >/dev/null 2>&1 || (echo "Node.js is not installed!" && exit 1)

CHECK_YARN_WINDOWS = powershell -Command "if (-not (Get-Command yarn -ErrorAction SilentlyContinue)) { Write-Host 'Yarn is not installed!' ; exit 1 }"
CHECK_YARN_UNIX = command -v yarn >/dev/null 2>&1 || (echo "Yarn is not installed!" && exit 1)

ifeq ($(OS),Windows_NT)
	CHECK_NODE := $(CHECK_NODE_WINDOWS)
	CHECK_YARN := $(CHECK_YARN_WINDOWS)
else
	CHECK_NODE := $(CHECK_NODE_UNIX)
	CHECK_YARN := $(CHECK_YARN_UNIX)
endif

dev:
	@echo "Make: dev"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn install
	yarn dev

lint:
	@echo "Make: lint"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn lint

lint-fix:
	@echo "Make: lint-fix"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn lint:fix

build:
	@echo "Make: build"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn build

preview:
	@echo "Make: preview"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn preview

types:
	@echo "Make: types"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn types

hooks:
	@echo "Make: hooks (lint-staged)"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn lint-staged

install:
	@echo "Make: install dependencies"
	@$(CHECK_NODE)
	@$(CHECK_YARN)
	yarn install

help:
	@echo "Available commands:"
	@echo "  make dev       - start dev server"
	@echo "  make build     - build project"
	@echo "  make preview   - preview build"
	@echo "  make lint      - run eslint"
	@echo "  make lint-fix  - run eslint with fix"
	@echo "  make types     - check TypeScript types"
	@echo "  make hooks     - run lint-staged manually"
	@echo "  make install   - install dependencies"
