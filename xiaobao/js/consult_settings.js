$(".my-checkbox").bootstrapSwitch({
    size: 'mini',
    onSwitchChange:function(event,state){
        if(state==true){
            $(this).prop('checked',true);
        }else{
            /* $(this).val("2");*/
            $(this).prop('checked',false);
        }
    }
});
