class SVGElement {
    constructor(type) {
        this.type = type;
        this.namespace = 'http://www.w3.org/2000/svg';
        this.node = document.createElementNS(this.namespace, this.type);
        return this;
    }
    attr(attrs) {
        for (const [key, value] of Object.entries(attrs)) {
            this.node = document.setAttributeNS(null, key, value);
        }
        return this;
    }
}