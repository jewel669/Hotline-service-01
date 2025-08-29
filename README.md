1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- getElementById("id") → Selects one element by its unique ID. Returns a single element (or null if not found).

- getElementsByClassName("class") → Selects all elements with a given class. Returns an HTMLCollection (live, updates if DOM changes).

- querySelector("selector") → Selects the first element that matches a CSS selector (like #id, .class, div > p).

- querySelectorAll("selector") → Selects all elements that match a CSS selector. Returns a NodeList (static, does not auto-update).

  2.How do you create and insert a new element into the DOM?

Ans:
1- Use document.createElement("tagName") to create an element.

2- dd text/content using element.textContent = "something".

3- Insert it into the DOM with methods like:

      * parent.appendChild(element) (adds at the end)

      * parent.insertBefore(newElement, referenceElement) (adds before a specific element)

3.What is Event Bubbling and how does it work?

Ans:
Event Bubbling is when an event starts from the innermost element (the target) and then propagates upward to its parent, grandparent, and so on, until it reaches the document.

4.What is Event Delegation? Why is it useful?

Ans:

- Event Delegation is attaching a single event listener to a parent element instead of multiple listeners on child elements.

It works because of event bubbling.

- Useful because:

1- Improves performance (less event listeners).

2- Handles dynamically added child elements.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans: Difference between preventDefault() and stopPropagation()

    * preventDefault() → Stops the default action of an element (like stopping a form from submitting, preventing a link from opening).

    * stopPropagation() → Stops the event from bubbling up to parent elements.
