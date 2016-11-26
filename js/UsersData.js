import $ from 'jquery';

const recentUsersURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const allTimeUserURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';


export default {
  getTopRecentUsers: ( callback ) =>
    $.getJSON( recentUsersURL, callback ),
  getTopAllTimeUsers: ( callback ) =>
    $.getJSON( allTimeUserURL, callback )
};
