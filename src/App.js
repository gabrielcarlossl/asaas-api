import "./App.css";

function App() {

  const form = document.querySelector("form");

  if (form !== null) {
    function handleSubmit(event) {
      event.preventDefault();

      const data = new FormData(event.target);

      const value = Object.fromEntries(data.entries());
      

      console.log(JSON.stringify(value));
    }
    form.addEventListener("submit", handleSubmit);
  }

  return (
    <div className="App">
      <h1>Asaas</h1>
      <div>
        <form>
          <label for="name">Nome </label>
          <input type="name" name="name" id="name" />
          <br />
          <label for="email">Email </label>
          <input type="email" name="email" id="email" />
          <br />
          <label for="phone">Telefone </label>
          <input type="phone" name="phone" id="phone" />
          <br />
          <label for="">Celular </label>
          <input type="mobilePhone" name="mobilePhone" id="mobilePhone" />
          <br />
          <label for="cpfCnpj">CPF ou CNPJ </label>
          <input
            placeholder="Apenas números"
            type="cpfCnpj"
            name="cpfCnpj"
            id="cpfCnpj"
          />
          <br />
          <label for="postalCode">CEP </label>
          <input
            placeholder="00000-000"
            type="postalCode"
            name="postalCode"
            id="postalCode"
          />
          <br />
          <label for="address">Rua </label>
          <input type="address" name="address" id="address" />
          <br />
          <label for="addressNumber">Número </label>
          <input type="addressNumber" name="addressNumber" id="addressNumber" />
          <br />
          <label for="complement">Complemento </label>
          <input type="complement" name="complement" id="complement" />
          <br />
          <label for="province">Bairro </label>
          <input type="province" name="province" id="province" />
          <br />
          <label for="externalReference">Referencia Externa </label>
          <input
            type="externalReference"
            name="externalReference"
            id="externalReference"
          />
          <br />
          <label for="notificationDisabled">Notificações: </label>
          <label htmlFor="notificationDisabled">Ativado</label>
          <input
            type="checkbox"
            name="notificationDisabled"
            id="notificationDisabled"
            value={false}
          />
          <label htmlFor="notificationDisabled">Desativado</label>
          <input
            type="checkbox"
            name="notificationDisabled"
            id="notificationDisabled"
            value={true}
          />
          <br />
          <label for="additionalEmails">Email Adicional </label>
          <input
            type="additionalEmails"
            name="additionalEmails"
            id="additionalEmails"
          />
          <br />
          <label for="municipalInscription">Inscrição Municipal </label>
          <input
            type="municipalInscription"
            name="municipalInscription"
            id="municipalInscription"
          />
          <br />
          <label for="stateInscription">Inscrição Estadual </label>
          <input
            type="stateInscription"
            name="stateInscription"
            id="stateInscription"
          />
          <br />
          <label for="observations">Observações </label>
          <input type="observations" name="observations" id="observations" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
