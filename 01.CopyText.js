// Copy Text
const btn = document.createElement("button");
const textArea = document.createElement("textarea");
btn.innerText = "Copy";

document.body.append(btn, textArea);

Object.assign(btn.style, {
  display: "block",
  backgroundColor: "#333",
  color: "#fff",
  margin: "10px auto",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
});

$(textArea).css({
  display: "block",
  backgroundColor: "#d4d4d4",
  margin: "10px auto",
  padding: "10px 20px",
  borderRadius: "6px",
  height: "50px",
});

const copyMassage = $(`<p class='copied-message'>Copied</p>`).css({
  width: "fit-content",
  margin: "10px auto",
  color: "#777",
  display: "none",
});

$(textArea).after(copyMassage);

$(() => {
  $(btn).on("click", async () => {
    const textAreaText = $(textArea).val();

    try {
      await navigator.clipboard.writeText(textAreaText);
      copyMassage.stop(true, true).fadeIn(500).delay(500).fadeOut(1000);
    } catch (err) {
      console.log(`Filed Copy ${err}`);
    }
  });
});
