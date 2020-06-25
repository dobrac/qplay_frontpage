<template>
  <div>
    <div style="display: flex;">
      <div style="flex-grow: 10;">&nbsp;</div>
      <button
        :class="'btn-currency ' + (currency == 'CZK' ? 'selected' : '')"
        style="margin-right: 10px;"
        @click="changeCurrency('CZK')"
      >
        <img src="/vip/switch/CZK.png" alt="CZK" />
      </button>
      <button
        :class="'btn-currency ' + (currency == 'EUR' ? 'selected' : '')"
        @click="changeCurrency('EUR')"
      >
        <img src="/vip/switch/EUR.png" alt="EUR" />
      </button>
    </div>

    <table class="table-vip" style="table-layout: fixed;">
      <thead>
        <tr>
          <th></th>
          <th>
            <img src="/vip/icons/Hrac.png" alt="DEFAULT" style="width: 100%;" />
          </th>
          <th>
            <a href="https://pay.net-inout.cz/?produkt=1" class="buy-link">
              <img
                :src="'/vip/icons/BasicVIP_' + currency + '.png'"
                alt="BASIC VIP"
                style="width: 100%;"
                class="vip-button"
              />
            </a>
          </th>
          <th>
            <a href="https://pay.net-inout.cz/?produkt=2" class="buy-link">
              <img
                :src="'/vip/icons/MediumVIP_' + currency + '.png'"
                alt="MEDIUM VIP"
                style="width: 100%;"
                class="vip-button"
              />
            </a>
          </th>
          <th>
            <a href="https://pay.net-inout.cz/?produkt=3" class="buy-link">
              <img
                :src="'/vip/icons/MasterVIP_' + currency + '.png'"
                alt="MASTER VIP"
                style="width: 100%;"
                class="vip-button"
              />
            </a>
          </th>
          <th>
            <a href="https://pay.net-inout.cz/?produkt=5" class="buy-link">
              <img
                :src="'/vip/icons/LegendVIP_' + currency + '.png'"
                alt="LEGEND VIP"
                style="width: 100%;"
                class="vip-button"
              />
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(section, index) in sections" class="section-header">
          <tr :key="index" class="section-header">
            <td
              :style="
                'text-align: right; opacity: 0.8; background-color: ' +
                section.color
              "
            >
              {{ section.header }}
            </td>
            <td colspan="5" :style="'background-color: ' + section.color"></td>
          </tr>
          <tr
            v-for="(item, indexItem) in section.items"
            :key="index + '-' + indexItem"
            class="section-row"
          >
            <td style="text-align: right;" v-html="item.name"></td>
            <td v-html="translateBool(item.default)"></td>
            <td v-html="translateBool(item.basic)"></td>
            <td v-html="translateBool(item.medium)"></td>
            <td v-html="translateBool(item.master)"></td>
            <td v-html="translateBool(item.legend)"></td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td>
            <a href="https://pay.net-inout.cz/?produkt=1" class="buy-link">
              <img
                :src="'/vip/prices/BasicVIP_' + currency + '.png'"
                alt="BASIC VIP price"
                style="width: 100%;"
                class="vip-button"
            /></a>
          </td>
          <td>
            <a href="https://pay.net-inout.cz/?produkt=2" class="buy-link">
              <img
                :src="'/vip/prices/MediumVIP_' + currency + '.png'"
                alt="MEDIUM VIP price"
                style="width: 100%;"
                class="vip-button"
            /></a>
          </td>
          <td>
            <a href="https://pay.net-inout.cz/?produkt=3" class="buy-link">
              <img
                :src="'/vip/prices/MasterVIP_' + currency + '.png'"
                alt="MASTER VIP price"
                style="width: 100%;"
                class="vip-button"
            /></a>
          </td>
          <td>
            <a href="https://pay.net-inout.cz/?produkt=5" class="buy-link">
              <img
                :src="'/vip/prices/LegendVIP_' + currency + '.png'"
                alt="LEGEND VIP price"
                style="width: 100%;"
                class="vip-button"
              />
            </a>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.buy-link {
  border-bottom: none;
}
.vip-button {
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.btn-currency {
  $border-width: 3px;

  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  height: 40px + 2 * $border-width;
  border: $border-width solid transparent;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }

  &.selected {
    border: $border-width solid #460e10;
  }
}

.table-vip {
  .section-header {
    td {
      text-align: center;
      font-weight: bold;
      color: white;
    }
  }
  .section-row {
    td {
      text-align: center;
    }
    &:hover {
      background-color: whitesmoke;
    }
  }

  td {
    padding: 5px;
  }
}
</style>

<script>
export default {
  data: () => {
    return {
      currency: 'CZK',
      sections: [
        {
          header: 'Detaily skupiny',
          color: '#5E7594',
          items: [
            {
              name: 'Délka trvání výhod',
              default: '-',
              basic: '30 dní',
              medium: '30 dní',
              master: '30 dní',
              legend: '30 dní',
            },
            {
              name: 'Prefix v tabu a chatu',
              default: '-',
              basic:
                '<span style="color: #ED7727; font-weight: bold;">BASIC</span>',
              medium:
                '<span style="color: #ED7727; font-weight: bold;">MEDIUM</span>',
              master:
                '<span style="color: #ED7727; font-weight: bold;">MASTER</span>',
              legend:
                '<span style="color: #FFC000; font-weight: bold;">*LEGEND*</span>',
            },
          ],
        },
        {
          header: 'Bonusy',
          color: '#3C96E0',
          items: [
            {
              name: '<b>Veškeré kity zdarma</b>',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: true,
            },
            {
              name: '<b>Game Cosmetics zdarma</b>',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: true,
            },
            {
              name: 'Legendary Crates',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: '1 Crate',
            },
            {
              name: 'Mystery Crates',
              default: false,
              basic: '1 Crate',
              medium: '3 Crates',
              master: '6 Crates',
              legend: '6 Crates',
            },
            {
              name: 'Coins při aktivaci',
              default: false,
              basic: '10 000 Coins',
              medium: '25 000 Coins',
              master: '50 000 Coins',
              legend: '-',
            },
          ],
        },
        {
          header: 'Ekonomika',
          color: '#BF3F7F',
          items: [
            {
              name: 'Crate Shards*',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: true,
            },
            {
              name: 'Týdenní odměny',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Daň z převodu Coins',
              default: '50 %',
              basic: '45 %',
              medium: '40 %',
              master: '35 %',
              legend: '35 %',
            },
            {
              name: 'Bonus Coins',
              default: false,
              basic: '10 %',
              medium: '15 %',
              master: '20 %',
              legend: '-',
            },
            {
              name: 'Odměna na konci hry',
              default: 'Coins',
              basic: 'Coins',
              medium: 'Coins',
              master: 'Coins',
              legend: 'Crate Shards*',
            },
          ],
        },
        {
          header: 'Globální výhody',
          color: '#C84340',
          items: [
            {
              name: 'Hlasování zdarma o mapě',
              default: '1x',
              basic: '1x',
              medium: '1x',
              master: '2x',
              legend: '4x',
            },
            {
              name: 'Zpráva po připojení na Lobby',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: true,
            },
            {
              name: 'Emotes ve hře (/emotes)',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Připojení na plný server',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Létání na Lobby (/fly)',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Psaní barevných zpráv',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
          ],
        },
        {
          header: 'Společnost',
          color: '#62983E',
          items: [
            {
              name: 'Žluté písmo v chatu',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: true,
            },
            {
              name: 'Možnost pojmenovat si peta',
              default: false,
              basic: false,
              medium: false,
              master: true,
              legend: true,
            },
            {
              name: 'Žádný slowmode v chatu',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Velikost party (/party)',
              default: '2 Hráči',
              basic: '3 Hráči',
              medium: '4 Hráči',
              master: '5 Hráčů',
              legend: '8 Hráčů',
            },
            {
              name: 'Soukromé zprávy (/msg)',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Možnost mít mazlíčka',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Velikost friend listu (/friend)',
              default: '5 Přátel',
              basic: '10 Přátel',
              medium: '15 Přátel',
              master: '20 Přátel',
              legend: '30 Přátel',
            },
          ],
        },
        {
          header: 'Minihry',
          color: '#1A99AA',
          items: [
            {
              name: 'Automatické přijímání Questů',
              default: false,
              basic: false,
              medium: false,
              master: true,
              legend: true,
            },
            {
              name: 'Sloty v EnderTruhle na MiniAnni',
              default: '9 Slotů',
              basic: '18 Slotů',
              medium: '18 Slotů',
              master: '18 Slotů',
              legend: '27 Slotů',
            },
            {
              name: 'Posílání věcí (/trade)',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Přenosná anvil (/anvil)',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
            {
              name: 'Přenosný workbench (/wb)',
              default: false,
              basic: true,
              medium: true,
              master: true,
              legend: true,
            },
          ],
        },
        {
          header: 'Ostatní',
          color: '#3A3838',
          items: [
            {
              name: 'Hodnost na TS3',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: true,
            },
            {
              name: 'Vytváření reportů zdarma (/report)',
              default: false,
              basic: false,
              medium: false,
              master: false,
              legend: true,
            },
          ],
        },
      ],
    }
  },
  methods: {
    changeCurrency(currency) {
      this.currency = currency
    },
    translateBool(text) {
      if (typeof text === 'boolean') {
        if (text) {
          return '✔'
        } else {
          return '<font color="lightgray">✘</font>'
        }
      } else {
        return text
      }
    },
  },
}
</script>
