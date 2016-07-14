/**
*
* MOD3  Pre3D Vertex Class
*
*
**/
!function(MOD3, undef){
@@USE_STRICT@@

var ModConstant = MOD3.ModConstant,
    X = ModConstant.X, Y = ModConstant.Y, Z = ModConstant.Z,
    Vector3 = MOD3.Vector3, A = MOD3.VecArray
;

var VertexPre3D = MOD3.VertexPre3D = MOD3.Class( MOD3.VertexProxy, {
    
    constructor: function( vertex ) {
        var self = this;
        self.$super('constructor', vertex );
        self.name = "VertexPre3D";
    },
    
    setVertex: function( vertex ) {
        var self = this;
        self.vertex = vertex;
        self.original = new A( [vertex.x, vertex.y, vertex.z] );
        self.xyz = new A( self.original );
        
        return self;
    },
    
    getXYZ: function( ) {
        var vt = this.vertex;
        return new A( [vt.x, vt.y, vt.z] );
    },
    
    getX: function( ) {
        return this.vertex.x;
    },
    
    getY: function( ) {
        return this.vertex.y;
    },
    
    getZ: function( ) {
        return this.vertex.z;
    },
    
    setXYZ: function( xyz ) {
        var self = this,
            vt = self.vertex;
        
        vt.x = xyz[0];
        vt.y = xyz[1];
        vt.z = xyz[2];
        
        return self;
    },
    
    setX: function( v ) {
        this.vertex.x = v;
        
        return this;
    },
    
    setY: function( v ) {
        this.vertex.y = v;
        
        return this;
    },
    
    setZ: function( v ) {
        this.vertex.z = v;
        
        return this;
    },
    
    getValue: function( axis )  {
        var vt = this.vertex;
        switch( axis ) 
        {
            case X: return vt.x;
            case Y: return vt.y;
            case Z: return vt.z;
        }
        return 0;
    },

    setValue: function( axis, v ) {
        var self = this,
            vt = self.vertex;
        switch( axis ) 
        {
            case X: vt.x = v; break;
            case Y: vt.y = v; break;
            case Z: vt.z = v; break;
        }
        return self;
   },
   
   setVector: function( v ) {
        var self = this,
            vt = self.vertex, xyz = v.xyz;
        
        vt.x = xyz[0];
        vt.y = xyz[1];
        vt.z = xyz[2];
        
        return self;
    },

    getVector: function( ) {
        var vt = this.vertex;
        return new Vector3( [vt.x, vt.y, vt.z] );
    }
});
// aliases
VertexPre3D.prototype.getXYZRef = VertexPre3D.prototype.getXYZ;
VertexPre3D.prototype.setXYZRef = VertexPre3D.prototype.setXYZ;

}(MOD3);