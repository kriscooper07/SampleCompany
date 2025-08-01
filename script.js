const { createApp } = Vue;

createApp({
  data() {
    return {
      companyName: "Sample Company",
      yearFounded: 2015,
      ceo: "John Dela Cruz",
      form: {
        name: "",
        email: "",
        contact: "",
        message: ""
      }
    };
  },
  computed: {
    savedMessages() {
      return JSON.parse(localStorage.getItem("contactMessages") || "[]");
    }
  },
  methods: {
    sendMessage() {
      const { name, email, contact, message } = this.form;

      if (name && email && contact && message) {
        const submission = {
          name,
          email,
          contact,
          message,
          submittedAt: new Date().toISOString()
        };

        const messages = this.savedMessages;
        messages.push(submission);
        localStorage.setItem("contactMessages", JSON.stringify(messages));

        alert("Message saved locally. Thank you, " + name + "!");

        // Reset form
        this.form.name = "";
        this.form.email = "";
        this.form.contact = "";
        this.form.message = "";
      } else {
        alert("Please fill in all fields.");
      }
    }
  }
}).mount("#app");
