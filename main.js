const Students = {
    data() {
        return {
            count: 0,
            Surname: '',
            Name: '',
            students: [],
            filled: false
        }
    },
    methods: {
        surname(event) {
            this.Surname=event.target.value
            this.count=this.Surname.length+this.Name.length
            if (this.Surname!='' && this.Name!='') {
                this.filled=true
            }
        },
        name(event) {
            this.Name=event.target.value
            this.count=this.Surname.length+this.Name.length
            if (this.Surname!='' && this.Name!='') {
                this.filled=true
            }
        },
        newStudent() {
            if (this.Surname!='' && this.Name!='') {
                this.students.push(literal(this.Surname)+' '+literal(this.Name))
                this.Surname=''
                this.Name=''
                this.count=0
                this.filled=false
            }
        }
    }
}
Vue.createApp(Students).mount('#stud')
function literal(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }