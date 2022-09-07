# Authentication Service

## Pagekage.json:

1. typescript
2. ts-node-dev: restarts target node when files change in dev env
3. express & @types/express
4. express-validator: validate and sanitize user input

---

## Commands

"tsc --init": creates TS config files

---

## Notes

Due to the surprising complexity around user validation, we need to move some of the the middlewares code to a common package that will eventually be push into npm
