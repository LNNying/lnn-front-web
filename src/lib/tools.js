export const getMenuByRouter = (router) => {
    let res = [];
    router.forEach(item => {
       if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
           let obj = {
               icon: (item.meta && item.meta.icon) || '',
               name: item.name,
               title: (item.meta && item.meta.title) || '',
               href: (item.meta && item.meta.href) || '',
               meta: item.meta
           };
           if (hasChild(item)) {
               obj.children = getMenuByRouter(item.children);
           }
           res.push(obj);
       }
    });
    return res;
};

export const hasChild = item => {
    return item.children && item.children.length;
};
