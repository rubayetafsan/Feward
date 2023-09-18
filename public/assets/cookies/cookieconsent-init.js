var cc = window.initCookieConsent();

// run plugin with your configuration
cc.run({
  current_lang: "en",
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false
  auto_language: "document", // default: null; could also be 'browser' or 'document'

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  // hide_from_bots: false,                  // default: false
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once on the first accept/reject action
  },

  onAccept: function (cookie) {
    // callback triggered on the first accept/reject action, and after each page load
  },

  onChange: function (cookie, changed_categories) {
    // callback triggered when user changes preferences after consent has already been given
  },

  gui_options: {
    consent_modal: {
      layout: "cloud", // box/cloud/bar
      position: "center", // bottom/middle/top + left/right/center  bottom right
      transition: "slide", // zoom/slide
      swap_buttons: false // enable to invert buttons
    },
    settings_modal: {
      layout: "box", // box/bar
      //position: "left", // left/right
      transition: "slide" // zoom/slide
    }
  },

  languages: {
    en: {
      consent_modal: {
        title: "We use cookies!",
        description:
          'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: "Accept all",
          role: "accept_all" // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Reject all",
          role: "accept_necessary" // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: "Cookie preferences",
        save_settings_btn: "Save settings",
        accept_all_btn: "Accept all",
        reject_all_btn: "Reject all",
        close_btn_label: "Close",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Expiration" },
          { col4: "Description" }
        ],
        blocks: [
          {
            title: "Cookie usage 📢",
            description:
              'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
          },
          {
            title: "Strictly necessary cookies",
            description:
              "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          },
          {
            title: "Performance and Analytics cookies",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false
            }
          },
          {
            title: "Advertisement and Targeting cookies",
            description:
              "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
            toggle: {
              value: "ads",
              enabled: false,
              readonly: false
            }
          },
          {
            title: "More information",
            description:
              'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/company/contactUs.html">contact us</a>.'
          }
        ]
      }
    },
    it: {
      consent_modal: {
        title: "Noi usiamo biscotti!",
        description:
          'Descrizione in italiano, biscotti etc. ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: "Acctta tutto",
          role: "accept_all" // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Rifiuta tutto",
          role: "accept_necessary" // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: "Centro preferenze",
        save_settings_btn: "Salva",
        accept_all_btn: "Accetta tutto",
        reject_all_btn: "Rifiuta tutto",
        close_btn_label: "Chiudi",
        cookie_table_headers: [
          { col1: "Nome" },
          { col2: "Dominio" },
          { col3: "Scadenza" },
          { col4: "Descrizione" }
        ],
        blocks: [
          {
            title: "Uso dei cookies 📢",
            description:
              'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
          },
          {
            title: "Cookie strettamente necessari",
            description:
              "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          },
          {
            title: "Cookie analitici",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false
            }
          },
          {
            title: "Cookie di marketing",
            description:
              "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
            toggle: {
              value: "ads",
              enabled: false,
              readonly: false
            }
          },
          {
            title: "Maggiori dettagli",
            description:
              'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/company/contactUs.html">contact us</a>.'
          }
        ]
      }
    },
    de: {
      consent_modal: {
        title: "Wir verwenden Cookies!",
        description:
          'Beschreibung auf Italienisch, Kekse etc. Gewährleistung des ordnungsgemäßen Betriebs und Tracking-Cookies, um zu verstehen, wie Sie damit interagieren. Letztere werden erst nach Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: "Akzeptiere alles",
          role: "accept_all" // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Alles ablehnen",
          role: "accept_necessary" // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: "Cookie Einstellungen",
        save_settings_btn: "Speichern",
        accept_all_btn: "Akzeptiere alle",
        reject_all_btn: "Alles ablehnen",
        close_btn_label: "Close",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Ablauf" },
          { col4: "Beschreibung" }
        ],
        blocks: [
          {
            title: "Cookie-Nutzung 📢",
            description:
              'Ich verwende Cookies, um die grundlegenden Funktionen der Website sicherzustellen und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich jederzeit an- oder abmelden möchten. Weitere Einzelheiten zu Cookies und anderen sensiblen Daten finden Sie vollständig <a href="#" class="cc-link">privacy policy</a>.'
          },
          {
            title: "Notwendige Cookies",
            description:
              "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          },
          {
            title: "Analyse Cookies",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false
            }
          },
          {
            title: "Werbe-Cookies",
            description:
              "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
            toggle: {
              value: "ads",
              enabled: false,
              readonly: false
            }
          },
          {
            title: "Mehr Info",
            description:
              'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/company/contactUs.html">contact us</a>.'
          }
        ]
      }
    }
  }
});
