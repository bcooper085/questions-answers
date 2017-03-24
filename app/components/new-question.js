import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
    actions: {
        questionForm() {
            this.set('addNewQuestion', true);
        },

        saveQuestion() {
            var params = {
                author: this.get('author'),
                body: this.get('body'),
                note: this.get('note'),
            };
            this.set('addNewQuestion', false);
            this.sendAction('saveQuestion', params);
        }
    }
});
