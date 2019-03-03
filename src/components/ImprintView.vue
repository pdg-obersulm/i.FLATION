<template>
  <v-dialog v-model="imprint" max-width="800">
    <v-btn slot="activator" flat>
      Impressum
    </v-btn>

    <v-card>
      <v-card-text>
        <div class="imprint-box mb-2">
          <h3>Impressum</h3>
          <span>Evangelisches Paul-Distelbarth-Gymnasium Obersulm</span>
          <span>Verantwortliche Lehrkraft: Stefan Geiger</span>
          <div class="my-1">
            <span>Mühlrainstr. 51</span>
            <span>74182 Obersulm</span>
            <span>info@evgo.de</span>
          </div>
        </div>

        <div class="imprint-box my-2">
          <h3>Redaktion und Darsteller</h3>
          <ul>
            <li>Benedikt Waldbüßer</li>
            <li>Simon Mundloch</li>
            <li>Paul-Richard Kaufmann</li>
            <li>Fabian Fuchs</li>
            <li>Tim Göhringer</li>
            <li>Paul Rissling</li>
            <li>Finn Fleiner</li>
            <li>Janine Marmein</li>
            <li>Patrick Stolze</li>
            <li>Max Kronmüller</li>
          </ul>
        </div>

        <div class="imprint-box my-2">
          <h3>Datenschutz</h3>
          <span>
            Diese Website speichert keine persönlich identifizierbaren Daten.
            Für 24 Stunden wird Ihre IP-Addresse mit der zugehörigen
            HTTP-Anfrage sowie Datum und Uhrzeit gespeichert, um
            Computerangriffe zu erkennen und zu verteidigen. Der Quelltext
            dieser Seite ist öffentlich einsehbar.
          </span>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="imprint = false">
          Schließen
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      imprint: false
    };
  }
};
</script>

<style scoped>
.imprint-box span {
  display: block;
}

.imprint-box h3 {
  margin-bottom: 4px;
}
</style>
