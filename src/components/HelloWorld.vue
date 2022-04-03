<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Formulario de pago!</h1>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-row>
        <b-col cols="6"><em>Datos principales de la tarjeta</em></b-col>
        <b-col cols="6"><em>Datos adicionales de la tarjeta</em></b-col>
      </b-row>
      <b-col cols="6">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="fieldset-horizontal"
            label="Nombre:"
            label-for="nombre"
            content-cols-sm
            content-cols-lg="7"
          >
            <b-form-input
              id="fieldset-horizontal"
              v-model="form.nameCard"
              placeholder="Ingrese el nombre como está en la tarjeta"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="ID Tarjeta:"
            label-for="numberCard"
            content-cols-sm
            content-cols-lg="6"
          >
            <b-form-input
              id="numberCard"
              v-model="form.numberCard"
              placeholder="Ingrese el numero de la tarjeta"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="expiryMonth"
            label="Mes de expiración:"
            label-for="expiryMonth"
            content-cols-sm
            content-cols-lg="6"
          >
            <b-form-input
              id="expiryMonth"
              v-model="form.expiryMonth"
              placeholder="Mes de caducidad"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Año de expiración:"
            label-for="expiryYear"
            content-cols-sm
            content-cols-lg="6"
          >
            <b-form-input
              id="expiryYear"
              v-model="form.expiryYear"
              placeholder="Año de caducidad"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Año de expiración:"
            label-for="cvv"
            content-cols-sm
            content-cols-lg="6"
          >
            <b-form-input
              id="cvv"
              v-model="form.cvv"
              placeholder="CVV"
            ></b-form-input>
          </b-form-group>

          <br />

          <b-row>
            <b-col cols="3">
              <b-button type="submit" variant="info">Pagar</b-button>
            </b-col>
            <b-col cols="3">
              <b-button type="reset" variant="secondary">Cancelar</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>

      <b-col cols="6">
        <b-row>
          <b-col cols="6">
            <b-form-group
              id="ip1"
              label="Nombres:"
              label-for="Nombres"
              content-cols-sm
              content-cols-lg="12"
            >
              <b-form-input
                id="Nombres"
                v-model="datosAdicionales.nombres"
                placeholder="Nombres"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Identificación:"
              content-cols-sm
              content-cols-lg="12"
            >
              <b-form-input
                placeholder="Identificación"
                v-model="datosAdicionales.documento"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Correo:" content-cols-sm content-cols-lg="12">
              <b-form-input
                placeholder="Correo"
                v-model="datosAdicionales.correo"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Dirección 2:"
              content-cols-sm
              content-cols-lg="12"
            >
              <b-form-input
                placeholder="Dirección 2"
                v-model="datosAdicionales.dir2"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Provincia:"
              content-cols-sm
              content-cols-lg="12"
            >
              <b-form-input
                placeholder="Provincia"
                v-model="datosAdicionales.provincia"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="ip2"
              label="Apellidos:"
              label-for="ip2"
              content-cols-sm
              content-cols-lg="12"
            >
              <b-form-input
                id="ip2"
                placeholder="Apellidos"
                v-model="datosAdicionales.apellidos"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Teléfono:"
              content-cols-sm
              content-cols-lg="12"
            >
              <b-form-input
                placeholder="Teléfono"
                v-model="datosAdicionales.telefono"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Dirección 1:"
              content-cols-sm
              content-cols-lg="12"
            >
              <b-form-input
                placeholder="Dirección 1"
                v-model="datosAdicionales.dir1"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="País:" content-cols-sm content-cols-lg="12">
              <b-form-input
                placeholder="País"
                v-model="datosAdicionales.pais"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Ciudad:" content-cols-sm content-cols-lg="12">
              <b-form-input
                placeholder="Ciudad"
                v-model="datosAdicionales.ciudad"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col cols="12">
        <b-alert :show="showBand" :variant="infoAlert">{{
          messageInfo
        }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <h3>
          <b-icon icon="cart-plus-fill" class="mr-1"></b-icon> Productos en el
          carrito
        </h3>
      </b-col>
      <b-col cols="6">
        <h3>
          Total Compra $:
          {{ totalCarrito }}
        </h3>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols="3" v-for="product in products" v-bind:key="product.id">
        <b-card-group>
          <b-card
            bg-variant="light"
            :header="product.title"
            class="text-center"
          >
            <ul>
              <li>Producto ID: {{ product.id }}</li>
              <li>Precio $: {{ product.price }}</li>
              <li>Stock: {{ product.quantity }}</li>
            </ul>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <b-card class="mt-12" header="Data Kushki API Response">
          <pre class="m-0">{{ responseKushki }}</pre>
        </b-card>
      </b-col>
    </b-row>
    <br />
  </b-container>
</template>
<script>
import axios from "axios";
const optionsRequestToken = {
  method: "POST",
  url: "https://api-uat.kushkipagos.com/card/v1/tokens",
  headers: {
    "Content-Type": "",
    "Public-Merchant-Id": "54079abff670448a82862ec2e5660e0b",
  },
  data: {
    card: {
      name: "",
      number: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
    totalAmount: 0,
    currency: "USD",
  },
};

const makeChargeRequest = {
  method: "POST",
  url: "https://api-uat.kushkipagos.com/card/v1/charges",
  headers: {
    "Content-Type": "application/json",
    "Private-Merchant-Id": "1cd829852f8e4769bfac2dd076320bdc",
  },
  data: {
    token: "",
    amount: {
      subtotalIva: 0,
      subtotalIva0: 10,
      ice: 0,
      iva: 0,
      currency: "USD",
    },
    deferred: { graceMonths: "02", creditType: "01", months: 3 },
    metadata: { Referencia: "987654" },
    contactDetails: {
      documentType: "CC",
      documentNumber: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    orderDetails: {
      siteDomain: "example.com",
      shippingDetails: {
        name: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        region: "",
        country: "",
      },
      billingDetails: {
        name: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        region: "",
        country: "",
      },
    },
    productDetails: {
      product: [
        {
          id: "198952AB",
          title: "eBook Digital Services",
          price: 15000,
          sku: "10101042",
          quantity: 1,
        },
        {
          id: "198953AB",
          title: "eBook Virtual Selling",
          price: 15000,
          sku: "004834GQ",
          quantity: 1,
        },
      ],
    },
    fullResponse: true,
  },
};

export default {
  name: "HelloWorld",
  mounted() {
    this.calcularTotal();
  },
  props: {
    msg: String,
  },
  data() {
    return {
      showBand: false,
      messageInfo: "Prueba",
      infoAlert: "info",
      datosAdicionales: {
        nombres: "",
        apellidos: "",
        documento: "",
        telefono: "",
        correo: "",
        dir1: "",
        dir2: "",
        pais: "",
        provincia: "",
        ciudad: "",
      },
      form: {
        nameCard: "",
        numberCard: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
      },
      products: [
        {
          id: "198952AB",
          title: "eBook Digital Services",
          price: 15000,
          sku: "10101042",
          quantity: 1,
        },
        {
          id: "198953AB",
          title: "eBook Virtual Selling",
          price: 15000,
          sku: "004834GQ",
          quantity: 1,
        },
      ],
      totalCarrito: 0,
      selectProduct: [],
      tokenResponse: "",
      responseKushki: {},
    };
  },
  methods: {
    calcularTotal() {
      this.messageInfo = "";
      this.showBand = false;
      this.infoAlert = "info";
      let total = this.products.map(function (x) {
        return Number(x.price);
      });

      var suma = total.reduce((total, item) => {
        return total + item;
      });
      this.totalCarrito = suma;
      optionsRequestToken.data.totalAmount = this.totalCarrito;
    },
    getToken() {
      this.showBand = true;
      this.messageInfo =
        "Generando Token para realizar el pago, por favor espere";
      this.infoAlert = "info";
      axios
        .request(optionsRequestToken)
        .then((response) => {
          this.tokenResponse = response.data.token;
          console.log("tokenResponse: " + this.tokenResponse);
          this.$toastr.success("Token generado correctamente", "Token Success");
          this.messageInfo =
            "Procesando su pago, ya casi terminamos por favor espere";
          this.addDataAdditional();
        })
        .catch((error) => {
          this.$toastr.error(
            "Ha ocurrido un error en la generación del token",
            "Token Error"
          );
          this.messageInfo = "";
          console.log(error.response.data.message);
          this.messageInfo = error.response.data.message;
          this.infoAlert = "danger";
        });
    },
    onSubmit(event) {
      event.preventDefault();
      if (
        this.form.nameCard == "" ||
        this.form.numberCard == "" ||
        this.form.expiryMonth == "" ||
        this.form.expiryYear == "" ||
        this.form.cvv == ""
      ) {
        this.$toastr.error(
          "Debe llenar todos los datos principales de la tarjeta",
          "Mensaje"
        );
      } else {
        optionsRequestToken.data.card.name = this.form.nameCard;
        optionsRequestToken.data.card.number = this.form.numberCard;
        optionsRequestToken.data.card.expiryMonth = this.form.expiryMonth;
        optionsRequestToken.data.card.expiryYear = this.form.expiryYear;
        optionsRequestToken.data.card.cvv = this.form.cvv;
        if (
          this.datosAdicionales.nombres == "" ||
          this.datosAdicionales.apellidos == "" ||
          this.datosAdicionales.documento == "" ||
          this.datosAdicionales.telefono == "" ||
          this.datosAdicionales.correo == "" ||
          this.datosAdicionales.dir1 == "" ||
          this.datosAdicionales.dir2 == "" ||
          this.datosAdicionales.pais == "" ||
          this.datosAdicionales.provincia == "" ||
          this.datosAdicionales.ciudad == ""
        ) {
          this.$toastr.error(
            "Debe llenar todos los datos adicionales de la tarjeta",
            "Mensaje"
          );
        } else {
          if (this.tokenResponse == "") {
            this.getToken();
          } else {
            this.messageInfo =
              "Procesando su pago, ya casi terminamos por favor espere";
            this.infoAlert = "info";
            this.addDataAdditional();
          }
        }
      }
    },
    addDataAdditional() {
      //this.$toastr.success("Datos preparados");
      makeChargeRequest.data.token = this.tokenResponse;
      makeChargeRequest.data.amount.subtotalIva0 = this.totalCarrito;
      makeChargeRequest.data.contactDetails.documentNumber =
        this.datosAdicionales.documento;
      makeChargeRequest.data.contactDetails.email =
        this.datosAdicionales.correo;
      makeChargeRequest.data.contactDetails.firstName =
        this.datosAdicionales.nombres;
      makeChargeRequest.data.contactDetails.lastName =
        this.datosAdicionales.apellidos;
      makeChargeRequest.data.contactDetails.phoneNumber =
        this.datosAdicionales.telefono;

      makeChargeRequest.data.orderDetails.shippingDetails.name =
        this.datosAdicionales.nombres + " " + this.datosAdicionales.apellidos;
      makeChargeRequest.data.orderDetails.shippingDetails.phone =
        this.datosAdicionales.telefono;
      makeChargeRequest.data.orderDetails.shippingDetails.address1 =
        this.datosAdicionales.dir1;
      makeChargeRequest.data.orderDetails.shippingDetails.address2 =
        this.datosAdicionales.dir2;
      makeChargeRequest.data.orderDetails.shippingDetails.city =
        this.datosAdicionales.ciudad;
      makeChargeRequest.data.orderDetails.shippingDetails.region =
        this.datosAdicionales.provincia;
      makeChargeRequest.data.orderDetails.shippingDetails.country =
        this.datosAdicionales.pais;

      makeChargeRequest.data.orderDetails.billingDetails.name =
        this.datosAdicionales.nombres + " " + this.datosAdicionales.apellidos;
      makeChargeRequest.data.orderDetails.billingDetails.phone =
        this.datosAdicionales.telefono;
      makeChargeRequest.data.orderDetails.billingDetails.address1 =
        this.datosAdicionales.dir1;
      makeChargeRequest.data.orderDetails.billingDetails.address2 =
        this.datosAdicionales.dir2;
      makeChargeRequest.data.orderDetails.billingDetails.city =
        this.datosAdicionales.ciudad;
      makeChargeRequest.data.orderDetails.billingDetails.region =
        this.datosAdicionales.provincia;
      makeChargeRequest.data.orderDetails.billingDetails.country =
        this.datosAdicionales.pais;

      axios
        .request(makeChargeRequest)
        .then((response) => {
          this.responseKushki = response.data;
          console.log("Make Charge: " + response);
          this.$toastr.success(
            "Se ha realizado el pago exitosamente",
            "Pago exitoso"
          );
          this.messageInfo = "";
          this.showBand = false;
          this.infoAlert = "info";
          this.restForm();
        })
        .catch((error) => {
          console.log(error);
          this.$toastr.error(
            "Ha ocurrido un error en el pago, por favor verifique los datos proporcionados",
            "Error"
          );
          console.log(error.response.data.message);
          this.messageInfo = error.response.data.message;
          this.infoAlert = "danger";
        });
    },
    onReset(event) {
      event.preventDefault();
      this.restForm();
    },
    restForm() {
      this.form.nameCard = "";
      this.form.numberCard = "";
      this.form.expiryMonth = "";
      this.form.expiryYear = "";
      this.cvv = "";
      this.datosAdicionales.nombres = "";
      this.datosAdicionales.apellidos = "";
      this.datosAdicionales.documento = "";
      this.datosAdicionales.telefono = "";
      this.datosAdicionales.correo = "";
      this.datosAdicionales.dir1 = "";
      this.datosAdicionales.dir2 = "";
      this.datosAdicionales.pais = "";
      this.datosAdicionales.provincia = "";
      this.datosAdicionales.ciudad = "";
    },
  },
};
</script>


<style scoped>
</style>
