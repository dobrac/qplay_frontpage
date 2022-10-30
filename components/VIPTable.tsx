import {Fragment, useState} from "react";

const sections = [
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
      /* {
        name:
          '<span style="color: indianred;"><strong>Legendary Crates</strong></span>',
        default: false,
        basic: false,
        medium: false,
        master: false,
        legend:
          '<span style="color: indianred; font-weight: bold;">2 Crates</span> <span style="text-decoration: line-through">1 Crate</span>',
      }, */
      {
        name: 'Mystery Crates',
        default: false,
        basic: '1 Crate',
        medium: '3 Crates',
        master: '6 Crates',
        legend: '6 Crates',
      },
      /* {
        name:
          '<span style="color: indianred;"><strong>Mystery Crates</strong></span>',
        default: false,
        basic:
          '<span style="color: indianred; font-weight: bold;">2 Crates</span> <span style="text-decoration: line-through">1 Crate</span>',
        medium:
          '<span style="color: indianred; font-weight: bold;">4 Crates</span> <span style="text-decoration: line-through">3 Crates</span>',
        master:
          '<span style="color: indianred; font-weight: bold;">7 Crates</span> <span style="text-decoration: line-through">6 Crates</span>',
        legend:
          '<span style="color: indianred; font-weight: bold;">7 Crates</span> <span style="text-decoration: line-through">6 Crates</span>',
      }, */
      /* {
        name: '<span style="color: #B3000C;"><strong>Christmas Crates</strong></span>',
        default: false,
        basic:
          '<span style="color: #B3000C;"><strong>1 Crate</strong></span>',
        medium:
          '<span style="color: #B3000C;"><strong>1 Crate</strong></span>',
        master:
          '<span style="color: #B3000C;"><strong>1 Crate</strong></span>',
        legend:
          '<span style="color: #B3000C;"><strong>2 Crates</strong></span>',
      }, */
      /* {
        name: '<span style="color: #2AC820;"><strong>Easter Crates</strong></span>',
        default: false,
        basic: false,
        medium:
          '<span style="color: #2AC820;"><strong>1 Crate</strong></span>',
        master:
          '<span style="color: #2AC820;"><strong>1 Crate</strong></span>',
        legend:
          '<span style="color: #2AC820;"><strong>2 Crates</strong></span>',
      },*/ 
       {
        name: '<span style="color: #ff8c00;"><strong>Halloween Crates</strong></span>',
        default: false,
        basic: false,
        medium: '<span style="color: #ff8c00;"><strong>1 Crate</strong></span>',
        master: '<span style="color: #ff8c00;"><strong>1 Crate</strong></span>',
        legend: '<span style="color: #ff8c00;"><strong>2 Crates</strong></span>',
      },
      /* {
        name:
          '<span style="color: #e75480;"><strong>Valentine Crates</strong></span>',
        default: false,
        basic:
          '<span style="color: #e75480; font-weight: bold;">1 Crate</span>',
        medium:
          '<span style="color: #e75480; font-weight: bold;">1 Crate</span>',
        master:
          '<span style="color: #e75480; font-weight: bold;">1 Crate</span>',
        legend:
          '<span style="color: #e75480; font-weight: bold;">2 Crates</span>',
      }, */
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
      {
        name: 'Ranked Pass na 1vs1',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
    ],
  },
  {
    header: 'Survival',
    color: '#2e5e38',
    items: [
      {
        name: 'Vygenerování vlastní hlavy /head',
        default: false,
        basic: false,
        medium: false,
        master: false,
        legend: true,
      },
      {
        name: '50% šance na získání spawneru po vytěžení se silktouchem',
        default: false,
        basic: false,
        medium: false,
        master: false,
        legend: true,
      },
      {
        name: 'Zvýraznění se /glow',
        default: false,
        basic: false,
        medium: false,
        master: false,
        legend: true,
      },
      {
        name: 'Psaní barevnějších zpráv pomocí HEX + /colorpicker',
        default: false,
        basic: false,
        medium: false,
        master: false,
        legend: true,
      },
      {
        name: 'Barvené psaní na cedulky',
        default: false,
        basic: false,
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
      {
        name: 'Vrátit se na předchozí pozici /back',
        default: false,
        basic: false,
        medium: false,
        master: true,
        legend: true,
      },
      {
        name: 'Editace armorstandů /armorstand',
        default: false,
        basic: false,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Editace vlastního času a počasí /ptime, /pweather',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Editace cedulky za pomocí Shift',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Virtuální ender chest /ec',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Virtuální anvil /anvil',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Virtuální crafting /wb',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Nasazení předmětu v ruce na hlavu /hat',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Sedání na schody a slaby',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Sedání kdekoliv /sit',
        default: false,
        basic: false,
        medium: false,
        master: true,
        legend: true,
      },
      {
        name: 'Bonusový kit',
        default: false,
        basic: true,
        medium: true,
        master: true,
        legend: true,
      },
      {
        name: 'Počet rezidencí /res',
        default: '3',
        basic: '4',
        medium: '5',
        master: '6',
        legend: '7',
      },
      {
        name: 'Počet možných domovů /sethome',
        default: '1',
        basic: '2',
        medium: '2',
        master: '4',
        legend: '6',
      },
      {
        name: 'Počet zaměstnání /jobs',
        default: '1',
        basic: '2',
        medium: '2',
        master: '3',
        legend: '3',
      },
      {
        name: 'Počet aukcí /aukce',
        default: '2',
        basic: '3',
        medium: '6',
        master: '9',
        legend: '12',
      },
      {
        name: 'Velikost rezidence',
        default: '50x50 bloků',
        basic: '100x100 bloků',
        medium: '150x150 bloků',
        master: '200x200 bloků',
        legend: '250x250 bloků',
      },
    ],
  },
  {
    header: 'Ostatní',
    color: '#3A3838',
    items: [
      {
        name: 'Hodnost na Discordu',
        default: false,
        basic: true,
        medium: true,
        master: true,
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
]

enum Currency {
  EUR = "EUR",
  CZK = "CZK"
}

function TranslateBool({text}: { text: string | boolean }) {
  if (typeof text === 'boolean') {
    if (text) {
      return (<td>✔</td>)
    } else {
      return (<td style={{color: "lightgray"}}>✘</td>)
    }
  } else {
    return (<td dangerouslySetInnerHTML={{__html: text}}/>)
  }
}

export default function VIPTable() {
  const [currency, setCurrency] = useState(Currency.CZK)

  function changeCurrency(currency: Currency) {
    setCurrency(currency)
  }

  return (
    <div>
      <div style={{display: "flex"}}>
        <div style={{flexGrow: "10"}}>&nbsp;</div>
        <button
          className={'btn-currency ' + (currency === Currency.CZK ? 'selected' : '')}
          style={{marginRight: "10px"}}
          onClick={() => changeCurrency(Currency.CZK)}
        >
          <img src="/vip/switch/CZK.png" alt="CZK"/>
        </button>
        <button
          className={'btn-currency ' + (currency === Currency.EUR ? 'selected' : '')}
          onClick={() => changeCurrency(Currency.EUR)}
        >
          <img src="/vip/switch/EUR.png" alt="EUR"/>
        </button>
      </div>

      <table className="table-vip" style={{tableLayout: "fixed"}}>
        <thead>
        <tr>
          <th/>
          <th>
            <img src="/vip/icons/Hrac.png" alt="DEFAULT" style={{width: "100%"}}/>
          </th>
          <th>
            <a href="https://pay.qplay.cz/?produkt=1" className="buy-link">
              <img
                src={'/vip/icons/BasicVIP_' + currency + '.png'}
                alt="BASIC VIP"
                style={{width: "100%"}}
                className="vip-button"
              />
            </a>
          </th>
          <th>
            <a href="https://pay.qplay.cz/?produkt=2" className="buy-link">
              <img
                src={'/vip/icons/MediumVIP_' + currency + '.png'}
                alt="MEDIUM VIP"
                style={{width: "100%"}}
                className="vip-button"
              />
            </a>
          </th>
          <th>
            <a href="https://pay.qplay.cz/?produkt=3" className="buy-link">
              <img
                src={'/vip/icons/MasterVIP_' + currency + '.png'}
                alt="MASTER VIP"
                style={{width: "100%"}}
                className="vip-button"
              />
            </a>
          </th>
          <th>
            <a href="https://pay.qplay.cz/?produkt=5" className="buy-link">
              <img
                src={'/vip/icons/LegendVIP_' + currency + '.png'}
                alt="LEGEND VIP"
                style={{width: "100%"}}
                className="vip-button"
              />
            </a>
          </th>
        </tr>
        </thead>
        <tbody>
        {sections.map((section, index) => {
          return (
            <Fragment key={index}>
              <tr key={index} className="section-header">
                <td
                  style={{
                    textAlign: "right", opacity: "0.8", backgroundColor: section.color
                  }}
                >
                  {section.header}
                </td>
                <td colSpan={5} style={{backgroundColor: section.color}}/>
              </tr>
              {section.items.map((item, indexItem) => {
                return (
                  <tr key={index + '-' + indexItem} className="section-row">
                    <td style={{textAlign: "right"}} dangerouslySetInnerHTML={{__html: item.name}}/>
                    <TranslateBool text={item.default}/>
                    <TranslateBool text={item.basic}/>
                    <TranslateBool text={item.medium}/>
                    <TranslateBool text={item.master}/>
                    <TranslateBool text={item.legend}/>
                  </tr>
                )
              })}
            </Fragment>
          )
        })}
        </tbody>
        <tfoot>
        <tr>
          <td/>
          <td/>
          <td>
            <a href="https://pay.qplay.cz/?produkt=1" className="buy-link">
              <img
                src={'/vip/prices/BasicVIP_' + currency + '.png'}
                alt="BASIC VIP price"
                style={{width: "100%"}}
                className="vip-button"
              /></a>
          </td>
          <td>
            <a href="https://pay.qplay.cz/?produkt=2" className="buy-link">
              <img
                src={'/vip/prices/MediumVIP_' + currency + '.png'}
                alt="MEDIUM VIP price"
                style={{width: "100%"}}
                className="vip-button"
              /></a>
          </td>
          <td>
            <a href="https://pay.qplay.cz/?produkt=3" className="buy-link">
              <img
                src={'/vip/prices/MasterVIP_' + currency + '.png'}
                alt="MASTER VIP price"
                style={{width: "100%"}}
                className="vip-button"
              /></a>
          </td>
          <td>
            <a href="https://pay.qplay.cz/?produkt=5" className="buy-link">
              <img
                src={'/vip/prices/LegendVIP_' + currency + '.png'}
                alt="LEGEND VIP price"
                style={{width: "100%"}}
                className="vip-button"
              />
            </a>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  )
}
