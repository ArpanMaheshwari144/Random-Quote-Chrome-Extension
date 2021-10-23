fetch("https://api.quotable.io/random")
  .then((data) => data.json())
  .then((adviceData) => {
    const adviceText = adviceData.content;
    const authorText = adviceData.author;

    /* querySelector() -> The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
    Note: The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
    If the selector matches an ID in document that is used several times (Note that an "id" should be unique within a page and should not be used more than once), it returns the first matching element. 
    */
    // const adviceElement = document.querySelector("p");
    // ******************OR****************************
    const adviceElement = document.getElementById("adviceElement");

    // const adviceAuthor = document.querySelector("h4");
    // ******************OR****************************
    const adviceAuthor = document.getElementById("author");

    adviceElement.innerHTML = adviceText;
    adviceAuthor.innerHTML = " ~ " + authorText;
  });
