## 미션 2-1

1. 반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다
2. 필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다
3. 필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다
4. 필요한 인자를 입력받아 원기둥의 넓이를 계산하는 함수를 만든다
5. 숫자가 아니면 에러를 반환하도록 구현한다.
6. 인자의 갯수가 부족하면 에러를 반환한다.

```
function areaC(r) {
    let area = 0;
    if(arguments.length != 1){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof r != "number"){
        throw "숫자를 입력하세요";
    }

    area = Math.PI*r*r;

    return area.toFixed(2);
}

function areaR(a,b){
    let area = 0;
    if(arguments.length != 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof a != "number" || typeof b != "number"){
        throw "숫자를 입력하세요";
    }
    area = a*b;

    return area;
}

function areaT(a,h){
    let area = 0;
    if(arguments.length != 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof a != "number" || typeof h != "number"){
        throw "숫자를 입력하세요";
    }
    area = a*h;

    return area;
}

function areaS(r,h){
    let area = 0;
    if(arguments.length != 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof r != "number" || typeof h != "number"){
        throw "숫자를 입력하세요";
    }
    let AC = areaC(r);
    area = 2*AC+2*Math.PI*r*h;
    
    return area.toFixed(2);
}
```

### 2-1 개선

```
function typeNumber(a){
    if(typeof a !== "number"){
        throw "숫자를 입력하세요";
    }
}

function checkParameter(name,para){
    switch(name){
        case 'Circle':
            if(para.length !== 1){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
        
        case 'Rectangular':
            if(para.length !== 2){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
        
        case 'Trapezoid':
            if(para.length !== 3){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
        
        case 'Cylinder':
            if(para.length !== 2){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
    }

};

function areaOfCircle(...item) {
    let area = 0;
    let arr = item;
    //arr = {r}
    checkParameter('Circle',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });

    area = Math.PI*item[0]*item[0];
    return area.toFixed(2);
}

function areaOfRectangular(...item){
    let area = 0;
    let arr = item;
    //arr = {a,b}
    checkParameter('Rectangular',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });
    area = item[0]*item[1];
    return area;
}

function areaOfTrapezoid(...item){
    let area = 0;
    let arr = item;
    //arr = {a,b,h}
    checkParameter('Trapezoid',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });
    area = (item[0]+item[1])*item[2]/2;

    return area;
}

function areaOfCylinder(...item){
    let area = 0;
    let arr = item;
    //arr = {r,h}

    checkParameter('Cylinder',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });

    let AC = areaOfCircle(item[0]);
    area = 2*AC+2*Math.PI*item[0]*item[1];
    
    return area.toFixed(2);
}
```

## 미션 2-1 개선

1. getArea 함수만들기
   //getArea('circle', 10);

> 원의 넓이 값출력

//getArea('rect', 10,15);

> 사각형의 넓이값출력

//getArea('trapezoid', 10,15,12);

> 사다리꼴의 넓이값출력

//getArea('circle', 1, n);

> 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력. (재귀적인 해결책을 제시한다)

```
function typeNumber(a){
    if(typeof a !== "number"){
        throw "숫자를 입력하세요";
    }
}

function checkParameter(length,condition1,condition2){

    if(arguments.length === 2){
        if(length!==condition1) {
            throw "인자 갯수가 맞지않습니다.";
        }else{
            return ;
        }

    } else {
        if(length < condition1 || length > condition2 ) {
            throw "인자 갯수가 맞지않습니다.";
        } else {
            return;
        }
    }

}

function getArea(name,...para){
    switch(name){
        case 'circle':
        
            para.forEach(function(item){
                typeNumber(item);
            });
            checkParameter(para.length,1,2);
            para.sort(function(a,b){
                return a-b;
            })
            return areaOfCircle(para[0],para[1]);

        case 'rect':

            para.forEach(function(item){
                typeNumber(item);
            });
            checkParameter(para.length,2);
            return areaOfRectangular(para[0],para[1])

        case 'trapezoid':
         
            para.forEach(function(item){
                typeNumber(item);
            });
            checkParameter(para.length,3);
            return areaOfTrapezoid(para[0],para[1],para[2]);

        case 'cylinder':
            
            para.forEach(function(item){
                typeNumber(item);
            });
            checkParameter(para.length,2);
            return areaOfCylinder(para[0],para[1]);
    }       

};


function areaOfCircle(radius,n) {
    let area = 0;
    
    area = Math.PI*radius*radius;
    console.log(area.toFixed(2));
    
    if(n !== undefined){

        if(radius === n){
            return;
        }else{
            radius++;
            return areaOfCircle(radius, n);
        }
    }

    return area;
    
}

function areaOfRectangular(a,b){
    let area = 0;
    area = a*b;
    console.log(area);
    return area;
}

function areaOfTrapezoid(a,b,h){
    let area = 0;
    area = (a+b)*h/2;
    console.log(area);
    return area;
}

function areaOfCylinder(r,h){
    let area = 0;

    area = 2*Math.PI*r*(r+h);
    console.log(area.toFixed(2));
    return area.toFixed(2);
}

```

### 