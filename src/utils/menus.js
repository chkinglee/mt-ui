import {getRequest} from "./api";

export const initMenu = (router, store) => {
    if (store.state.routes.length > 0) {
        return;
    }
    getRequest("/api/v1/menus/tenant/MT/menus").then(data => {
        let fmtRoutes = formatRoutes(data);
        router.addRoutes(fmtRoutes);
        store.commit('initRoutes', fmtRoutes)
    })
};


export const formatRoutes = (routes) => {
    let fmtRoutes = [];
    routes.forEach(route => {
        let {
            path,
            url,
            componentDir,
            component,
            iconCls,
            name,
            meta,
            tenantId,
            children
        } = route;
        if (children && children instanceof Array) {
            children = formatRoutes(children)
        }
        let fmtRoute = {
            path: path,
            name: name,
            iconCls: iconCls,
            meta: meta,
            tenantId: tenantId,
            children: children,
            url: url,
            component: function (resolve) {
                if (componentDir) {
                    require([`../components/${componentDir}/${component}.vue`], resolve)
                } else {
                    require([`../components/${component}.vue`], resolve)
                }
            }
        };
        fmtRoutes.push(fmtRoute)
    });
    return fmtRoutes
};