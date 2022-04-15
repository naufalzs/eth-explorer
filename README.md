# Eth-Explorer

## Table of Contents

- [Description](#description)
- [Initial Setup](#initial-setup)
- [Running Development Environment](#running-development-environment)
- [Basic JS and Theories Test](#basic-js-and-theories-test)

## Description

### Abstract

Eth Explorer adalah aplikasi pencarian transaksi blockchain dan bitcoin tracker sederhana yang dibuat menggunakan API etherscan.io

### Feature

Fitur yang telah tersedia dalam project

1. Search by address.
2. Offset selector.
3. Pagination.
4. Bitcoin live tracker.

## Initial Setup

This project uses React with NextJS Framework. You need to install the required
dependencies prior to building and contributing to the project.

This project uses environment variables to safe API Key from etherscan. So, add these lines to `.env.local` to
setup your local environment variables:

```bash
NEXT_PUBLIC_API_KEY = W6ETABF7R929SFMQ4UPMG2CXE3F1AQHBV8
```

## Running Development Environment

To install dependencies the server:

```bash
yarn install
```

To run the server:

```bash
yarn dev
```

You can see the app running by going to `http://localhost:4000/` via your browser.

## Basic JS and Theories Test

Berikut jawaban untuk soal lain

1. Jawaban untuk soal “Basic Javascript Programming Test” terdapat di folder scripts, dan telah diembed ke halaman `http://localhost:4000/basic-js` untuk mempermudah pengetesan
2. Jawaban soal teori berada di file “Theory-test-naufal.pdf” pada root folder repository
