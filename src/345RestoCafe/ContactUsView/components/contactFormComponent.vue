<script>
export default {
  name: "contactFormComponent",
  data() {
    return {
      form: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        contactType: '',
        message: '',
      },
      sendMessage: false,
    };
  },
  computed: {
    validEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
    },
    validPhone() {
      return /^[0-9]{9,15}$/.test(this.form.phone);
    }
  },
  methods: {
    sendForm() {
      if (!this.validEmail || !this.validPhone || !this.form.contactType) {
        alert("Por favor, complete correctamente todos los campos.");
      }

      const recipient = this.form.contactType === "contacto"
          ? "contacto@345restocafe.com"
          : "eventos@345restocafe.com";

      const datosFormulario = {
        nombre: this.form.name,
        apellido: this.form.lastname,
        email: this.form.email,
        phone: this.form.phone,
        recipient: recipient,
        message: this.form.message,
      };

      console.log("Datos enviados:", datosFormulario);

      fetch("https://345restocafe.com/api/enviar-correo.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosFormulario)
      })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              this.sendMessage = true;
              setTimeout(() => {
                this.sendMessage = false;
                this.form = {
                  name: '',
                  lastname: '',
                  email: '',
                  phone: '',
                  contactType: '',
                  message: ''
                };
              }, 3000);
            } else {
              alert("Error al enviar el correo: " + data.message);
            }
          })
          .catch(error => console.error("Error en la solicitud:", error));
      this.sendMessage = true;

      // Limpiar el formulario después de enviarlo
      setTimeout(() => {
        this.sendMessage = false;
        this.form = {
          name: '',
          lastname: '',
          email: '',
          phone: '',
          contactType: '',
          message: ''
        };
      }, 3000);
    }
  }
};
</script>>

<template>
  <div class="wrapper">
    <div class="container py-5">
      <div class="row">
        <h4 class="col-12 text-primary my-5">Formulario de Contacto</h4>
        <div class="col-12 col-md-6 mb-5 mb-md-0 align-content-center">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.289258216881!2d-77.06093992593462!3d-12.092339342748936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9ab63012999%3A0xb254c9814dd875e6!2sPiso%2013%2C%20Tom%C3%A1s%20Ramsey%20930%2C%20Magdalena%20del%20Mar%2015076!5e0!3m2!1ses-419!2spe!4v1688662866676!5m2!1ses-419!2spe"
              class="img-fluid w-100 h-100 mb-4"
              style="min-height: 200px"
          />
        </div>
        <div class="col-12 col-md-6">
          <div class="card shadow p-5">
            <h4 class="text-center mb-4">Formulario de Contacto</h4>

            <form @submit.prevent="sendForm">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre *</label>
                <input type="text" id="nombre" class="form-control" v-model="form.name" required>
              </div>

              <div class="mb-3">
                <label for="apellido" class="form-label">Apellido *</label>
                <input type="text" id="apellido" class="form-control" v-model="form.lastname" required>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico *</label>
                <input type="email" id="email" class="form-control" v-model="form.email" required>
                <div v-if="!validEmail" class="text-danger small">Ingrese un email válido.</div>
              </div>

              <div class="mb-3">
                <label for="celular" class="form-label">Celular *</label>
                <input type="text" id="celular" class="form-control" v-model="form.phone" required>
                <div v-if="!validPhone" class="text-danger small">Ingrese un número válido.</div>
              </div>

              <div class="mb-3">
                <label for="tipoContacto" class="form-label">Seleccione una opción *</label>
                <select id="tipoContacto" class="form-select" v-model="form.contactType" required>
                  <option value="">Seleccione...</option>
                  <option value="contacto">Contacto</option>
                  <option value="eventos">Eventos</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje *</label>
                <textarea id="mensaje" class="form-control" rows="4" v-model="form.message" required></textarea>
              </div>

              <button type="submit" class="btn-relief btn btn-dark w-100 text-white">Enviar</button>
            </form>

            <div v-if="sendMessage" class="alert alert-success mt-3 text-center">
              ¡Tu mensaje ha sido enviado con éxito!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #f4f4f4;
}
h4 {
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
}
label{
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 16px;
}
.btn-relief {
  padding: 20px 40px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 5px 5px 0 #808080;
}
.btn-relief:hover {
  transform: translate(5px, 5px);
  box-shadow: 0 0 0 #808080;
}
</style>