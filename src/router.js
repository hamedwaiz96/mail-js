class Router {
  constructor(node, routes){
    this.node = node;
    this.routes = routes;
  }

  start(){
    window.addEventListener("hashchange", this.render.bind(this));
  }

  activeRoute(){
    let route = window.location.hash.substring(1, window.location.hash.length);
    return this.routes[route];
  }

  render(){
    const self = this;
    let component = this.activeRoute();
    if(component === undefined){
      self.node.innerHTML = "";
    } else {
      self.node.innerHTML = "";
      self.node.appendChild(component.render());
    }
  }
}

module.exports = Router;
