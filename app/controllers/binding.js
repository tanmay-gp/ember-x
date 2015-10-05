export default Ember.Controller.extend({
  actions: {
    toggleBinding() {
      this.toggleProperty('toHide');
    }
  }
});