"use strict";

(function ($) {
  'use strict';

  var addonsPluginInstaller = window.addonsPluginInstaller || {};
  addonsPluginInstaller = {
    installButtonSelector: '.addons-install-plugin',
    init: function init() {
      this.events();
    },
    events: function events() {
      var self = this;
      $(document).on('click', self.installButtonSelector, function (e) {
        e.preventDefault();
        var type = $(this).data('type') === 'external' ? 'external' : 'wporg';
        var plugin_name = $(this).data('plugin-name');
        var redirect_to = $(this).data('redirect-to');
        if (type === 'external') {
          var url = $(this).data('plugin-url');
          self.installExternalPlugin($(this), url, plugin_name, redirect_to);
        } else {
          // self.installPlugin(plugin_name); - TODO: We don't need it yet, but we should rely on the WP API to install plugins from wp.org.
        }
      });
    },
    installExternalPlugin: function installExternalPlugin(button, url, plugin_name, redirect_to) {
      var data = {
        action: 'addons_install_external_plugin',
        url: url,
        plugin_name: plugin_name,
        nonce: addonsPluginInstallerConfig.nonce
      };
      button.text(addonsPluginInstallerConfig.i18n.installingText);
      $.post(ajaxurl, data, function (response) {
        if (!response.success) {
          button.text(addonsPluginInstallerConfig.i18n.defaultText);
          alert(response.data.message);
          return;
        }
        button.text(addonsPluginInstallerConfig.i18n.activatingText);
        setTimeout(function () {
          window.location.href = redirect_to;
        }, 1000);
      });
    }
  };
  $(document).ready(function () {
    addonsPluginInstaller.init();
  });
})(jQuery);