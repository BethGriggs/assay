MODULE=$1
MODULE_VERSION=$2
MODULE_REPOSITORY=$3
NODE_VERSION=$4

# Source NVM 
. ~/.nvm/nvm.sh

cd /tmp
rm -rf assay/$MODULE
mkdir -p assay/$MODULE
cd assay/$MODULE

git clone --depth 1 -b $MODULE_VERSION $MODULE_REPOSITORY .

# Install Node.js version specified or exit
nvm install $NODE_VERSION || exit 1

npm install 
npm test