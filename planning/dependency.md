``` mermaid 
---
Title: Exomine 
---

flowchart TD

main.js
governors.js
colonies.js
minerals.js
miningFacilities.js
transientState.js
buyButton.js
boughtList.js
database.js

main.js-->governors.js
main.js-->colonies.js
main.js-->minerals.js
main.js-->buyButton.js
main.js-->boughtList.js
governors.js-->transientState.js
governors.js-->database.js
colonies.js-->transientState.js
colonies.js-->database.js
minerals.js-->database.js
miningFacilities.js-->database.js
miningFacilities.js-->transientState.js
main.js-->miningFacilities.js
buyButton.js-->transientState.js
minerals.js-->transientState.js
boughtList.js-->transientState.js
boughtList.js-->database.js
buyButton-->database.js
```

