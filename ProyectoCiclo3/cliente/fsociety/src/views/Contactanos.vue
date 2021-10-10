<template>
  <div>
    <div class="contact-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Contactanos</h1>
            </div>
          </div>
          <div class="col-md-6">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.272094750238!2d-75.6796992350933!3d7.887952359075997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5b1f8230f77693%3A0x160a75c43392fdca!2sPuerto%20Libertador%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sco!4v1633103410249!5m2!1ses!2sco"
                width="
              100%"
                height="500px"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-content">
              <div class="container">
                <form @submit.prevent="sendEmail" id="contact" >
                  <div class="row row__container">
                    <div class="col-md-12">
                      <fieldset>
                        <input
                          class="input__styles"
                          name="name"
                          v-model="name"
                          type="text"
                          id="name"
                          placeholder="Nombre"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <input
                          class="input__styles"
                          name="email"
                          v-model="email"
                          type="email"
                          id="email"
                          placeholder="example@gmail.com"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <input
                          class="input__styles"
                          name="subject"
                          v-model="subject"
                          type="text-area"
                          id="subject"
                          placeholder="Asunto"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <textarea
                          class="textarea__styles"
                          name="message"
                          v-model="message"
                          rows="6"
                          id="message"
                          placeholder="Escribe tu mensaje"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <button type="submit" class="button">
                          Enviar mensaje
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// we are going to use emailjs to let the clients contact us using a simple form
import emailjs from 'emailjs-com';

export default {
  name: "Contactanos",
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_wfzgxwu', 'template_aie97te', e.target, 'user_B2YwIp12nE1rsTDjMG47K', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.meessage
        })
        console.log('it works!!!');
        swal("Mensaje enviado exitosamente!", "success");
      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    },
  }
};
</script>

<style scoped>
.row__container {
  margin: auto;

  display: block;
  border: 40px solid rgb(235, 230, 230);
  border-radius: 10px;
  background: rgb(235, 230, 230);
}
.button {
  width: 100%;
  padding: 10px 20px;
  background: rgb(5, 172, 223);
  outline: none;
  border: none;
  color: #fff;
}
.input__styles {
  width: 100%;
  margin-bottom: 30px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: solid rgb(0, 195, 255);
}

.input__styles:focus {
  background: transparent;
  outline: none;
  border: none;
  border-bottom: solid rgb(4, 238, 4);
}
.textarea__styles {
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: solid rgb(0, 195, 255);
}

.textarea__styles:focus {
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: solid rgb(4, 238, 4);
  background: rgba(202, 191, 191, 0.248);
}
</style>
