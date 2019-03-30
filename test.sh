# Source NVM 
. ~/.nvm/nvm.sh

cd /tmp
rm -rf assay/$MODULE
mkdir -p assay/$MODULE
cd assay/$MODULE

git clone --depth 1 -b $MODULE_VERSION $MODULE_REPOSITORY .
nvm use 10.15.3
npm install 
npm test
