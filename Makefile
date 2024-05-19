install:
	npm ci 

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

make lint:
	npx eslint . 

brain-even:
	node bin/brain-even.js