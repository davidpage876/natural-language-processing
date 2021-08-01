function handleSubmit(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;
    console.log(`Form submitted with url: ${url}`);
}