/* global module */

module.exports = {

  /**
   * This pattern matches most common email addresses. No attempt was made to match every possibly valid email
   * address as it is highly irregular for services to allow esoteric email addresses and equally unusual for
   * web services to accept these patterns.
   *
   * The following list on non-matching email addresses was taken from wikipedia:
   *
   * prettyandsimple@example.com
   * very.common@example.com
   * disposable.style.email.with+symbol@example.com
   * other.email-with-dash@example.com
   * fully-qualified-domain@example.com.
   * "very.unusual.@.unusual.com"@example.com
   * "very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com
   * example-indeed@strange-example.com
   * admin@mailserver1
   * #!$%&'*+-/=?^_`{}|~@example.org
   * "()<>[]:,;@\\\"!#$%&'-/=?^_`{}| ~.a"@example.org
   * " "@example.org
   * example@s.solutions
   * user@localserver
   * user@[IPv6:2001:DB8::1]
   */

  email: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/

};
