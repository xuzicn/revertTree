const revertTree = require('./revertTree');

var data = {
    "name": "18912386146", 
    "size": 45, 
    "children": [
        {
            "name": "13811179796", 
            "size": 10
        }, 
        {
            "name": "18511331067", 
            "size": 10
        }, 
        {
            "name": "18631867507", 
            "size": 10
        }, 
        {
            "name": "18616261983", 
            "size": 45, 
            "children": [
                {
                    "name": "13811179796", 
                    "size": 10
                }, 
                {
                    "name": "18995390312", 
                    "size": 10
                }
            ]
        }, 
        {
            "name": "13466692515", 
            "size": 10
        }, 
        {
            "name": "13650731515", 
            "size": 45, 
            "children": [
                {
                    "name": "13811179796", 
                    "size": 10
                }, 
                {
                    "name": "13037986580", 
                    "size": 10
                }, 
                {
                    "name": "18995390312", 
                    "size": 10
                }
            ]
        }, 
        {
            "name": "15809619551", 
            "size": 10
        }, 
        {
            "name": "18601191669", 
            "size": 10
        }, 
        {
            "name": "15909638715", 
            "size": 10
        }, 
        {
            "name": "15909619055", 
            "size": 10
        }, 
        {
            "name": "18902266418", 
            "size": 63, 
            "children": [
                {
                    "name": "13560047280", 
                    "size": 63
                },
                {
                    "name": "13632270695", 
                    "size": 10
                }, 
                {
                    "name": "13650731515", 
                    "size": 45
                }, 
                {
                    "name": "13268069280", 
                    "size": 167
                }
            ]
        }, 
        {
            "name": "13037986580", 
            "size": 10
        }, 
        {
            "name": "18995390312", 
            "size": 10
        }
    ]
}


function cloneData () {
    return JSON.parse(JSON.stringify(data));
}


var dataCopy0 = cloneData();
console.log(
    JSON.stringify(revertTree(dataCopy0, dataCopy0.children[2]), null, 4)
);

var dataCopy1 = cloneData();
console.log(
    JSON.stringify(revertTree(dataCopy1, dataCopy1.children[3].children[1]), null, 4)
);