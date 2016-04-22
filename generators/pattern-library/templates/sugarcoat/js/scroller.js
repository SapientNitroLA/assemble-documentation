// http://jsfiddle.net/mekwall/up4nu/ modified to keep track of two sets fo nav items
// Cache selectors

var lastId
    , lastId2
    , primaryItems = document.querySelectorAll( '.sugar-nav-item' )
    , secondaryItems = document.querySelectorAll( '.sugar-nav-subitem' )
    ;

function getHrefValues( obj ) {

    var hrefArray = [];

    for ( var i = 0; i < obj.length; i++ ) {
        
        var href = obj[ i ].getAttribute( 'href' );
        
        hrefArray[ i ] = document.querySelectorAll( href )[ 0 ];
    }

    return hrefArray;
}

var primaryScrollItems = getHrefValues( primaryItems );
var secondaryScrollItems = getHrefValues( secondaryItems );

// var lastId, lastId2, topMenu = $('#sugar-nav'),
//     // All list items
//     menuItems = topMenu.find('a'),
//     primaryItems = topMenu.find('.sugar-nav-item'),
//     secondaryItems = topMenu.find('.sugar-nav-subitem'),
//     // Anchors corresponding to menu items
//     scrollPrimaryItems = primaryItems.map(function() {
//         var item = $($(this).attr('href'));
//         if (item.length) {
//             return item;
//         }
//     }),
//     scrollSecondaryItems = secondaryItems.map(function() {
//         var item = $($(this).attr('href'));
//         if (item.length) {
//             return item;
//         }
//     });
//
// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e) {
//     var href = $(this).attr('href'),
//         offsetTop = href === '#' ? 0 : $(href).offset().top + 1;
//
//     $('html, body').stop().animate({
//         scrollTop: offsetTop
//     }, 300);
//     e.preventDefault();
// });

window.addEventListener( 'scroll', function( e ) {
    
    var currentPrimary = 0
        , currentSecondary = 0
        ;
    
    for ( var j = 0; j < primaryScrollItems.length; j++ ) {
        
        var primaryOffset = primaryScrollItems[ j ].getBoundingClientRect().top - 5;        
        
        if ( primaryOffset < 0 ) {

            currentPrimary = j;

        }
        else {
            break;
        }
    }
    for ( var k = 0; k < secondaryScrollItems.length; k++ ) {

        var secondaryOffset = secondaryScrollItems[ k ].getBoundingClientRect().top - 5;        
        
        if ( secondaryOffset < 0 ) {

            currentSecondary = k;
        }
        else {
            break;
        }
    }
    
    if ( lastId !== currentPrimary ) {
        
        if ( primaryItems[ lastId ]) {
            
            primaryItems[ lastId ].classList.remove( 'active' );
        }
        primaryItems[ currentPrimary ].classList.add( 'active' );
        
        lastId = currentPrimary;
    }
    if ( lastId2 !== currentSecondary ) {
        
        if ( secondaryItems[ lastId2 ]) {
            
            secondaryItems[ lastId2 ].classList.remove( 'active' );
        }
        secondaryItems[ currentSecondary ].classList.add( 'active' );
        
        lastId2 = currentSecondary;
    }
});