// $(document).ready(() => {
//   // Load items from the API and display them on the page
//   $.get("/api/items", (data) => {
//     data.forEach((item) => {
//       $("#items-list").append(`<li>${item.title}: ${item.content}</li>`);
//     });
//   });

//   // Handle form submission
//   $("#add-item-form").submit((event) => {
//     event.preventDefault();

//     const title = $("#title").val();
//     const content = $("#content").val();

//     $.post("/api/items", { title, content }, (data) => {
//       console.log(data.message);
//       $("#title").val("");
//       $("#content").val("");
//     });
//   });
// });
