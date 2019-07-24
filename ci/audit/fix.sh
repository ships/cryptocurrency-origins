#!/bin/bash -eux

pushd subject

  yarn install
  yarn upgrade -CLA

popd

cp -R ./subject/. ./dirty/
