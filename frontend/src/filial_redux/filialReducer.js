const INITIAL_STATE = {
    filial: {
        _id: 1,
        codigoFilial: 'MVR',
        nomeFilial: 'FILIAL DE VOLTA REDONDA',
        cnpjFilial: '29060647000190',
    },
    list: [
            {filial: {
                codigoFilial: 'MVR',
                nomeFilial: 'FILIAL DE VOLTA REDONDA',
                cnpjFilial: '29060647000190',
                id: '1' 
        }}, 
            {filial: {
                codigoFilial: 'FMG',
                nomeFilial: 'FILIAL DE MINAS GERAIS',
                cnpjFilial: '29060647000603',
                id: '2'
        }}, 
            {filial: {
                codigoFilial: 'FCB',
                nomeFilial: 'FILIAL DE CUBATÃO',
                cnpjFilial: '29060647001243',
                id: '3'
        }}
    ]
}

export default(state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INPUT_CHANGED':
            return {...state, 'codigoFilial': action.payload }
        default:
            return state
    }
}
