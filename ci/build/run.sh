#!/bin/bash -eux

out_dir="${PWD}/dirty/origins"

mkdir -p "$out_dir"

pushd subject

  npm install
  npm run build

  cp dist/* "$out_dir"

popd
