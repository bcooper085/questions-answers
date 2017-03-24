import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
    actions: {
        updateQuestion() {
            this.set('updateQuestion', true);
        },
        editQuestion(question) {
            var params = {
              author: this.get('author'),
              body: this.get('body'),
              note: this.get('note'),
            };
            this.set('updateQuestion', false);
            this.sendAction('editQuestion', question, params);
        }
    }
});
