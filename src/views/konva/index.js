
let konvaFun = {};


konvaFun.createCanvasArrow = (ctx, type, x, y, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C) => {
    switch (type) {
        // 横向左
        case 1:
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
            ctx.beginPath();
            ctx.fillStyle = '#000';
            ctx.moveTo(x + 5, y + 1);
            ctx.lineTo(x + 5, y + ROUTE_INTERVAL_C - 1);
            ctx.lineTo(x, y + ROUTE_INTERVAL_C * .5);
            ctx.fill();
            ctx.closePath();
            break;
        // 横向右
        case 2:
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
            ctx.beginPath();
            ctx.fillStyle = '#000';
            ctx.moveTo(x + ROUTE_INTERVAL_R - 5, y + 1);
            ctx.lineTo(x + ROUTE_INTERVAL_R - 5, y + ROUTE_INTERVAL_C - 1);
            ctx.lineTo(x + ROUTE_INTERVAL_R, y + ROUTE_INTERVAL_C * .5);
            ctx.fill();
            ctx.closePath();
            break;
        // 纵向上
        case 3:
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, ROUTE_INTERVAL_C, ROUTE_INTERVAL_R);
            ctx.beginPath();
            ctx.fillStyle = '#000';
            ctx.moveTo(x + 1, y + 5);
            ctx.lineTo(x + ROUTE_INTERVAL_C - 1, y + 5);
            ctx.lineTo(x + ROUTE_INTERVAL_C * .5, y);
            ctx.fill();
            ctx.closePath();
            break;
        // 纵向下
        case 4:
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, ROUTE_INTERVAL_C, ROUTE_INTERVAL_R);
            ctx.beginPath();
            ctx.fillStyle = '#000';
            ctx.moveTo(x + 1, y + ROUTE_INTERVAL_R - 5);
            ctx.lineTo(x + ROUTE_INTERVAL_C - 1, y + ROUTE_INTERVAL_R - 5);
            ctx.lineTo(x + ROUTE_INTERVAL_C * .5, y + ROUTE_INTERVAL_R);
            ctx.fill();
            ctx.closePath();
            break;
    }
};

konvaFun.createSimulateNodeData = () => {
    let nodeList = [];
    for (let i = 0; i <50; i++) {
        for (let j = 0; j < 60; j++) {
            nodeList.push({
                x: i,
                y: j
            })
        }
    }
    return nodeList;
};

// 构建地图图片
konvaFun.initCanvas = (interval, colorObj, NODE_WIDTH_HEIGHT) => {
    // 生成地图图片
    return new Promise(((resolve, reject) => {
        try {
            // 横向 宽 纵向 高
            const ROUTE_INTERVAL_R = NODE_WIDTH_HEIGHT * .55;
            // 横向 高 纵向宽
            const ROUTE_INTERVAL_C = NODE_WIDTH_HEIGHT * .6;

            const scale = 5;

            let canvas = document.createElement('canvas');
            canvas.height = window.innerHeight * scale;
            canvas.width = window.innerWidth * scale;
            document.body.appendChild(canvas);
            let ctx = canvas.getContext('2d');
            const NODE_LIST = konvaFun.createSimulateNodeData();
            for (let i = 0, len = NODE_LIST.length; i < len; i++) {
                let item = NODE_LIST[i];
                let x = (item.x + 1) * interval * 1.1;
                let y = (item.y + 1) * interval * 1.1;
                ctx.beginPath();
                ctx.fillStyle = colorObj.rectFill;
                ctx.strokeStyle = colorObj.rectStroke;
                ctx.fillRect(x, y, NODE_WIDTH_HEIGHT, NODE_WIDTH_HEIGHT);

                konvaFun.createCanvasArrow(ctx, 1, x - ROUTE_INTERVAL_R - 1, y + NODE_WIDTH_HEIGHT / 4.5, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
                konvaFun.createCanvasArrow(ctx, 2, x + NODE_WIDTH_HEIGHT + 1, y + NODE_WIDTH_HEIGHT / 4.5, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
                konvaFun.createCanvasArrow(ctx, 3, x + NODE_WIDTH_HEIGHT / 4.5, y - ROUTE_INTERVAL_R - 1, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
                konvaFun.createCanvasArrow(ctx, 4, x + NODE_WIDTH_HEIGHT / 4.5, y + NODE_WIDTH_HEIGHT + 1, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
            }
            let image = new Image();
            image.src = canvas.toDataURL('baseMap/png');
            document.body.removeChild(canvas);
            resolve({
                image: image,
                scale: scale
            });
        } catch (e) {
            reject(e)
        }
    }));
}














export default konvaFun;
