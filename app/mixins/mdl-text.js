import Ember from 'ember';

export default Ember.Mixin.create({
  initializeMdlTextfield: function() {
     componentHandler.upgradeElement(this.get('element'), 'MaterialTextfield');
  }.on('didInsertElement')
});