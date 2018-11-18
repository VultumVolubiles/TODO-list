new Vue ({
	el: '#List',
	data: {
		list: [
		  {name: "Элемент 1", checked: false},
		  {name: "Элемент 2", checked: false},
		  {name: "Элемент 3", checked: false},
		  {name: "Элемент 4", checked: false},
		  {name: "Элемент 5", checked: false},
		  {name: "Элемент 6", checked: false},
		  {name: "Элемент 7", checked: false}
		],
		Input: '',
		cont:0,
	},
	methods: {
		Add: function () {
			if (this.Input != '')
			{
				this.list.push({name: this.Input, checked: false});
				this.Input=''
			}
		},
		Delete: function (index) {
			if (this.list[index].checked)
			{
				this.cont--;
				this.list.splice(index, 1)
			}
			else 
				this.list.splice(index, 1)
		},
		SelectedElements (index) {
			if (this.list[index].checked)
				this.cont++
			else
				this.cont--
		}
	},
	
	computed: {
		
		Count: function () {
			return this.list.length
		},
		InProcent: function () {
			procent=Math.round(100/(this.Count/this.cont))
			if (isNaN(procent))
				return 0
			else
				return procent
		}
	}
});