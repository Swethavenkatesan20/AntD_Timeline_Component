1. proptype:


2. No input sanitization

i was using input directly from props and user without checking or cleaning it,if position is "malicious-class'; alert('xss')" then this will be added in <div className={`timeline-content ${position || ''}`} 
fix: created valid prop check in proptype.js so props from this only will be added now doing this can not add dangerous values if values is not in the valid prop it will be empty string ""

3. Poor Error Boundaries
 ISSUE: No semantic HTML or ARIA 
fix : added required semantic tags section and aside

4. CSS Class Injection Vulnerability
CURRENT ISSUE:
<div className={`timeline-content ${position || ''}`}>
fix : checked safe posotions and now passing as class name

5. 

