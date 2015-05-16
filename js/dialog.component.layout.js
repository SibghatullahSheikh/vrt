/*
    
    VRT - Copyright © 2014 Odd Marthon Lende
    All Rights Reserved
    
    A simple layout component
    
*/

define(['js/dialog.component', 'd3'], function (DialogComponent, d3) {
    
    function Layout (options) {
        
        var layout, elements = [], nth = null;
        
        options = options || {};
        
        DialogComponent.call(this, options.style);
        
        layout = options.data;
        layout = Array.isArray(layout) ? layout : [];
        
        this.element
            .classed("container-fluid", true)
            .selectAll("div")
            .data(layout)
            .enter()
            .append("div")
            .attr("class", classNames)
            .classed("column", true)
            .each(function () {
                return elements.push(this);
            });
        
        this.set = function (n) {
            return ( nth = Number(n) ), this;
        }

        this.valueOf = function () {
            return nth;
        }
        
        this.on("insert", function () {
           
            var s, node = this.nest().node();
            
            if(typeof nth === 'number')
                elements[nth].appendChild(node);
            
        });
        

    }
                  
    function classNames (d, i) {
        return String(d);
    }

    Layout.prototype = new DialogComponent("layout");

    return Layout;

})