<template>
  <v-dialog v-model="help" max-width="800">
    <v-btn slot="activator" flat>Über diese Seite</v-btn>

    <v-card>
      <v-card-text>
        <div class="help-box">
          <h3>Hallo!</h3>
          <span>
            Auf dieser Website möchten wir erklären, was Preisstabilität in
            modernen Volkswirtschaften bedeutet. Dazu entwickeln wir drei
            mögliche Szenarien für Deutschlands Volkswirtschaft, welche Sie
            rechts oben frei wählen können. Wünschen Sie eine einfache Erklärung
            der Szenarien, klicken Sie auf
            <v-icon small>mdi-information</v-icon>. Sehen Sie selbst, welche
            Folgen die drei Szenarien für Konsumenten, Sparer, Kreditnehmer,
            Unternehmen oder den Staat haben können. Weiter stellen wir die
            Frage, ob das Zwei-Prozent-Inflationsziel der EZB für uns als
            Konsumenten überhaupt von Vorteil ist.
          </span>
          <span>
            i.FLATION steht für "I", also ich, das Individum, sowie für
            "Information" - wir bieten eine breite Informationspalette aus
            verschiedenen Ansichten, sodass sich jeder eine Meinung bilden kann.
          </span>
          <span>
            Viel Spaß wünschen die Schülerinnen und Schüler der 11. Klasse des
            Evangelischen Paul-Distelbarth-Gymnasiums in Obersulm!
          </span>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="help = false">Schließen</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      help: true
    };
  }
};
</script>

<style scoped>
.help-box span,
.help-box h3 {
  display: block;
  margin-bottom: 8px;
}
</style>
