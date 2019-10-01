var clock = new Vue ({
    el:'#time',
    data: {
        hour:'',
        minute:'',
        second:''
    },
    methods: {
        // 自訂方法:設定時間
        setClock(){
            // 新增一個日期物件放在 date 防止網路流量過大
            var date = new Date();
            this.hour = date.getHours();
            this.minute = date.getMinute();
            this.second = date.getSecond();
        }
    },
    // 執行：會在所有元素顯示後執行
    mounted () {
        // 設定間隔(方法，間隔時間)
        setInterval(this.setClock, 1000);
    }
});


